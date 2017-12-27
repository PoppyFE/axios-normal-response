
const RESP_CODES = {
  SUCCESS: 'S0001',

  UNAUTHORIZED: 'F401',
  FORBIDDEN_ACCESS: 'F403',
  NOT_FOUND: 'F404',
  OFTEN_REQUEST: 'F429',
  SVR_ERR: 'F500',

  NETWORK_ERR: 'F9997',
  SERVICE_EXCEPTION: 'F9998',
  UNKNOWN_ERR: 'F9999',
};

const RESP_MSG = {
  SERVICE_EXCEPTION: '服务异常',
  UNKNOWN_ERR: '未知错误',
  NETWORK_ERR: '网络异常',
};

function formatErrResp(code, msg) {
  return {
    respCode: code,
    respMessage: msg,
  };
}

export default {
  RESP_CODES,
  RESP_MSG,
  formatErrResp,
};
