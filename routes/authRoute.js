import express from 'express';
import {contactController, registerController} from '../controllers/authController.js';

//router object
const router=express.Router()




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

router.post('/register',registerController);

/** 
* @swagger
* /api/auth/send_mail:
*   post:
*     tags: [authentication]
*     description: Log in with existing credentials
* 
*/
router.post('/send_mail', contactController);



export default router;