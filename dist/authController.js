"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyOtp = exports.registerController = exports.loginController = exports.forgetPasswordController = exports.contactController = void 0;
var _authHelper = require("../helpers/authHelper.js");
var _response = require("../helpers/response.js");
var _transporter = require("../helpers/transporter.js");
var _otpModel = _interopRequireDefault(require("../models/otpModel.js"));
var _userModel = _interopRequireDefault(require("../models/userModel.js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var registerController = exports.registerController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var ValidEmail, existing_user, hashedpass, user, savedUser;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!(!req.body.name || req.body.name.length > 100 || !/^[a-zA-Z\s]+$/.test(req.body.name))) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", (0, _response.WriteResponse)(res, 400, "Name can't be empty, must be less than 100 characters, and can only include letters and spaces", null));
        case 3:
          //Validate email
          ValidEmail = isValidEmail(req.body.emailId);
          if (ValidEmail) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", (0, _response.WriteResponse)(res, 400, "Please enter a valid email", null));
        case 6:
          if (isValidPhone(req.body.phone)) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", (0, _response.WriteResponse)(res, 400, "Please enter a valid phone number", null));
        case 8:
          if (isValidPassword) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", (0, _response.WriteResponse)(res, 400, "Password must be at least 8 characters long, and must contain at least one uppercase letter, one lowercase letter, and one special character.", null));
        case 10:
          if (!(!req.body.address || req.body.address.length > 250)) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", (0, _response.WriteResponse)(res, 400, "Address can't be empty, must be less than 250 characters.", null));
        case 12:
          _context.next = 14;
          return _userModel["default"].findOne({
            email: req.body.emailId
          });
        case 14:
          existing_user = _context.sent;
          if (!existing_user) {
            _context.next = 17;
            break;
          }
          return _context.abrupt("return", (0, _response.WriteResponse)(res, 409, "Account already exist with this email.", null));
        case 17:
          _context.next = 19;
          return (0, _authHelper.hashPassword)(req.body.password);
        case 19:
          hashedpass = _context.sent;
          user = new _userModel["default"]({
            email: req.body.emailId,
            // Ensure this matches the field in your Swagger doc
            password: hashedpass,
            name: req.body.name,
            address: req.body.address
          }); // Save the user to the database
          _context.next = 23;
          return user.save();
        case 23:
          savedUser = _context.sent;
          return _context.abrupt("return", (0, _response.WriteResponse)(res, 200, "successful", savedUser));
        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", (0, _response.WriteResponse)(res, 500, "Internal Server error", null));
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 27]]);
  }));
  return function registerController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var loginController = exports.loginController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, email, password, user, match, token, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password; //validation
          if (!(!email || !password)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", (0, _response.WriteResponse)(res, 402, "error:Invalid email or password", null));
        case 4:
          _context2.next = 6;
          return _userModel["default"].findOne({
            email: email
          });
        case 6:
          user = _context2.sent;
          if (user) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", (0, _response.WriteResponse)(res, 404, "Account does not exist with this email.", null));
        case 9:
          _context2.next = 11;
          return (0, _authHelper.comparePassword)(user.password, password);
        case 11:
          match = _context2.sent;
          if (match) {
            _context2.next = 14;
            break;
          }
          return _context2.abrupt("return", (0, _response.WriteResponse)(res, 401, "Invalid Password", null));
        case 14:
          _context2.next = 16;
          return _jsonwebtoken["default"].sign({
            _id: user.id
          }, process.env.JWT_SECRET, {
            expiresIn: "1d"
          });
        case 16:
          token = _context2.sent;
          data = {
            _id: user.id,
            email: user.email,
            token: token
          };
          return _context2.abrupt("return", (0, _response.WriteResponse)(res, 200, "Login Successful", data));
        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", (0, _response.WriteResponse)(res, 500, "Internal Server Error", null));
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 21]]);
  }));
  return function loginController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var forgetPasswordController = exports.forgetPasswordController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var email, user, otp, existing_user, currentTime, msg, mail;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          email = req.body.email;
          _context3.next = 4;
          return _userModel["default"].findOne({
            email: email
          });
        case 4:
          user = _context3.sent;
          if (user) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", (0, _response.WriteResponse)(res, 404, "Account with this Email does not exist.", null));
        case 7:
          otp = generateRandomOtp();
          _context3.next = 10;
          return _otpModel["default"].findOne({
            email: email
          });
        case 10:
          existing_user = _context3.sent;
          console.log("existing_user---------------->", existing_user);
          currentTime = Date.now();
          if (!(existing_user && currentTime - new Date(existing_user.createdAt).getTime() < 10 * 60 * 1000)) {
            _context3.next = 16;
            break;
          }
          _context3.next = 16;
          return _otpModel["default"].deleteOne({
            email: email
          });
        case 16:
          _context3.next = 18;
          return _otpModel["default"].create({
            email: email,
            otp: otp
          });
        case 18:
          msg = "You are receiving this email because a request to reset your password was received for your account.<br><br>\n\nYour one-time password (OTP) for password reset is: <b>".concat(otp, "</b><br><br>\n\nFor security reasons, please do not share this OTP with anyone. Enter this OTP on the password reset page to complete the process.<br><br>\n\nIf you did not request a password reset, please ignore this email or contact our support team immediately.");
          mail = (0, _transporter.maildata)(email, "Password Reset OTP", msg, "<b>".concat(msg, "</b>")); // console.log(mail);
          _transporter.transporter.sendMail(mail, function (err, info) {
            if (err) {
              console.log(err);
              return (0, _response.WriteResponse)(res, 500, "Error sending email.", null);
            }
          });
          return _context3.abrupt("return", (0, _response.WriteResponse)(res, 200, "OTP sent to your email id successfully.", null));
        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", (0, _response.WriteResponse)(res, 500, "Internal Server Error", null));
        case 28:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 24]]);
  }));
  return function forgetPasswordController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var contactController = exports.contactController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var mail;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          mail = (0, _transporter.maildata)('iprincepurohit@gmail.com', "test", "first email text", '<b>kya baat h</b>'); // console.log(mail);
          _transporter.transporter.sendMail(mail, function (err, info) {
            if (err) console.log(err);
            // else
            //   console.log(info);
          });
          return _context4.abrupt("return", (0, _response.WriteResponse)(res, 201, "Mail sent successfully", null));
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function contactController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var verifyOtp = exports.verifyOtp = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body2, email, otp, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, otp = _req$body2.otp;
          _context5.next = 3;
          return otpVerification(email, otp);
        case 3:
          result = _context5.sent;
          if (!(result == 'EXPIRED')) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", (0, _response.WriteResponse)(res, 402, 'Sorry, this OTP has expired.', null));
        case 8:
          if (!(result == 'INVALID')) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", (0, _response.WriteResponse)(res, 402, "Invalid OTP", null));
        case 10:
          return _context5.abrupt("return", (0, _response.WriteResponse)(res, 201, "OTP verified successfully.", null));
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function verifyOtp(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//check the email is valid or not
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidPhone(phone) {
  var phoneNumberRegex = /^\d{10,}$/;
  return phoneNumberRegex.test(phone);
}
function isValidPassword(password) {
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  return passwordRegex.test(password);
}
function generateRandomOtp() {
  var charset = '1234567890';
  var password = '';
  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
function otpVerification(_x11, _x12) {
  return _otpVerification.apply(this, arguments);
}
function _otpVerification() {
  _otpVerification = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(email, otp) {
    var storedOtp;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _otpModel["default"].findOne({
            email: email
          });
        case 2:
          storedOtp = _context6.sent;
          if (storedOtp) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", 'INVALID');
        case 5:
          if (!(Date.now() - new Date(storedOtp.createdAt).getTime() > 600000)) {
            _context6.next = 9;
            break;
          }
          _context6.next = 8;
          return _otpModel["default"].deleteOne({
            email: email
          });
        case 8:
          return _context6.abrupt("return", 'EXPIRED');
        case 9:
          if (!(storedOtp.otp !== otp)) {
            _context6.next = 11;
            break;
          }
          return _context6.abrupt("return", 'INVALID');
        case 11:
          _context6.next = 13;
          return _otpModel["default"].deleteOne({
            email: email
          });
        case 13:
          return _context6.abrupt("return", 'VALID');
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _otpVerification.apply(this, arguments);
}