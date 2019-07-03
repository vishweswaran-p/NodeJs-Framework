/**
  * @module router/auth
  * @file This file has the endpoints for authentication related operations
  * @author vishnu
  */

import authController from 'controller/auth';
import validationService from 'services/validation';
import * as authenticationValidator from 'validators/authenticationValidator'

/**
 * @class authRouter
 * @description This class has router middlewares for authentication related endpoints
 */
class authRouter {

    login(req, res, next) {
        validationService.validateRequestBody(req, authenticationValidator.emailLogin).then(result => {
            return authController.login(req.body);
        })
        .then(res.$end)
        .catch(res.$end)
    }
}

export default new authRouter();