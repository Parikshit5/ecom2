"use strict";

var _express = _interopRequireDefault(require("express"));
var _colors = _interopRequireDefault(require("colors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _morgan = _interopRequireDefault(require("morgan"));
var _db = _interopRequireDefault(require("./config/db.js"));
var _authRoute = _interopRequireDefault(require("./routes/authRoute.js"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerOptions = require("./helpers/swaggerOptions.js");
var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Configure environment variables
_dotenv["default"].config();

// Database configuration
(0, _db["default"])();

// Create Express app
var app = (0, _express["default"])();
var port = process.env.PORT;

// Middleware
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));

//Initialize Swagger-jsdoc
var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
// Serve Swagger documentation
app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));

// Routes

app.use('/api/auth', _authRoute["default"]);

// Start server
app.listen(port, function () {
  console.log("Example app is running at port ".concat(port).bgCyan.white);
});