
import defaultNormalResponseMap from './responseCodeMsg';
import responeUtil from './responeUtil';

let responseCodeMsg = {};

const normalResponse = {

  setResponseCodeMsg(options) {
    if (options.responseCodeMsg) {
      responseCodeMsg = Object.assign({}, defaultNormalResponseMap, options.responseCodeMsg);
    } else {
      responseCodeMsg = defaultNormalResponseMap;
    }
  },

  succResponseHandle(response) {
    if (!(response.data) || !(response.data.respCode)) {
      const errRespData = responeUtil.formatErrResp(responeUtil.RESP_CODES.SERVICE_EXCEPTION,
        responeUtil.RESP_MSG.SERVICE_EXCEPTION);
      return Promise.reject(errRespData);
    }

    if (response.data.respCode === responeUtil.RESP_CODES.SUCCESS) {
      return response.data;
    }

    return Promise.reject(response.data);
  },

  // return { respCode: required respMessage: optional data: optional }
  errResponseHandle(error) {
    if (!error.response) {
      return Promise.reject(responeUtil.formatErrResp(responeUtil.RESP_CODES.NETWORK_ERR, responeUtil.RESP_MSG.NETWORK_ERR));
    }

    const data = error.response.data;
    const respCode = data ? data.respCode : 'F' + error.response.status;

    let respData;
    if (respCode && normalResponse.responseCodeMsg.hasOwnProperty(respCode)) {
      respData = responeUtil.formatErrResp(respCode, normalResponse.responseCodeMsg[respCode]);
    } else {
      respData = responeUtil.formatErrResp(responeUtil.RESP_CODES.UNKNOWN_ERR, responeUtil.RESP_MSG.UNKNOWN_ERR);
    }

    return Promise.reject(respData);
  },
};

export default normalResponse;
