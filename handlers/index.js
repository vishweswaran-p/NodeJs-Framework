/** 
  * @file Handlers
  * @description This file has all the route handlers of this application
  * @author vishnu
  */

import express from 'express';
import authRouter from 'routes/auth';

let router = express.Router({caseSensitive: true});

/**
 * @description Authentication related handlers
 */
router.post('/auth/login', authRouter.login);

export default router;

