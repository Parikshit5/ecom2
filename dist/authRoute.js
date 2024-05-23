"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authController = require("../controllers/authController.js");
var _authMiddleware = require("../middlewares/authMiddleware.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//router object
var router = _express["default"].Router();

//routing
//REGISTER || POST
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [authentication]
 *     description: Sample POST route description
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               emailId:
 *                 type: string
 *               phone:
 *                 type: number
 *               password:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns a success message
 */

router.post('/register', _authController.registerController);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [authentication]
 *     description: Sample POST route description
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns a success message
 */

router.post('/login', _authController.loginController);

/**
 * @swagger
 * /api/auth/forgetPassword:
 *   post:
 *     tags: [authentication]
 *     description: Sample POST route description
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns a success message
 */

router.post('/forgetPassword', _authController.forgetPasswordController);

/**
 * @swagger
 * /api/auth/verifyOtp:
 *   post:
 *     tags: [authentication]
 *     description: Sample POST route description
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns a success message
 */

router.post('/verifyOtp', _authController.verifyOtp);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * /api/auth/send_mail:
 *   post:
 *     tags: [authentication]
 *     description: Send mail with existing credentials
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               message:
 *                 type: string
 *                 example: "Hello, this is a test message."
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.post('/send_mail', _authMiddleware.requireSignIn, _authController.contactController);
var _default = exports["default"] = router;