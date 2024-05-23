"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WriteResponse = void 0;
var WriteResponse = exports.WriteResponse = function WriteResponse(res, statusCode) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  if (statusCode == null || typeof statusCode !== 'number') {
    return res.send({
      statusCode: 400,
      message: "error:Status code must be number only and it cannot be null",
      data: null
    });
  }
  if (typeof message !== 'string' || null) {
    return res.send({
      statusCode: 400,
      message: "error:message must be sent in string or can be null only.",
      data: null
    });
  }
  if (message.toLowerCase().includes('error')) {
    data = null;
  }
  return res.send({
    statusCode: statusCode,
    message: message,
    data: data
  });
};