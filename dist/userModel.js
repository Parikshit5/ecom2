"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    requried: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    "default": 0
  }
}, {
  timestamps: true
});
var _default = exports["default"] = _mongoose["default"].model('users', userSchema);