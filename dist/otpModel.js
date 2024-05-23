"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var otpSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    requried: true
  },
  otp: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    expires: 1500,
    //expires in 1500 seconds
    "default": Date.now
  }
}, {
  timestamps: true
});
var _default = exports["default"] = _mongoose["default"].model('otp', otpSchema);