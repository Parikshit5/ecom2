"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = exports.maildata = void 0;
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
// create reusable transporter object using the default SMTP transport
var transporter = exports.transporter = _nodemailer["default"].createTransport({
  port: 587,
  // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: process.env.SENDING_MAIL,
    pass: process.env.EMAIL_PASS
  },
  secure: false
});
var maildata = exports.maildata = function maildata(to, subject, text, html) {
  var mailData = {
    from: '"No Reply" <no-reply@localhost>',
    // sender address
    to: to,
    // list of receivers
    subject: subject,
    text: text,
    html: html
  };
  return mailData;
};