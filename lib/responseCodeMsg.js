import responeUtil from './responeUtil';

const defaultNormalResponse = {
  [responeUtil.RESP_CODES.UNAUTHORIZED]: '页面已过期，请重新登录',
  [responeUtil.RESP_CODES.FORBIDDEN_ACCESS]: '禁止访问',
  [responeUtil.RESP_CODES.NOT_FOUND]: '未知资源',
  [responeUtil.RESP_CODES.OFTEN_REQUEST]: '请求操作太频繁',
  [responeUtil.RESP_CODES.SVR_ERR]: '服务异常',

  [responeUtil.RESP_CODES.NETWORK_ERR]: '网络异常',
  [responeUtil.RESP_CODES.UNKNOWN_ERR]: '未知错误',
};

export default {
  defaultNormalResponseMap,
};
