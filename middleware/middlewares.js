/**
 * Middlewares are defined as array and it will get initialized in app.js while server starts,
 * based on array index order middleware will get executed.
 */

import * as errors from 'middleware/errors';
import api from 'middleware/apiResponse';
import logger from  'services/log';
import utility from 'services/utility';
import authController from 'controller/auth';
import commonConstant from 'constant/commonconstant';
import apiResponseConstant from 'constant/apiresponseconstant';

class middleware {
    constructor () {
        this.middlewares = [
                {
                    description: 'Sets the headers to allow cross-domain requests.',
                    run:  (req, res, next) => {
                        logger.info("req.method  ", req.method);
                        logger.info("req.url  ", req.url);
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Requested-With,x-user-token,x-user-platform');
        
                        if ('OPTIONS' === (req.method || '').toUpperCase()) {
                            return res.status(200).end();
                        }
        
                        next();
                    }
                },
                {
                    description: 'Ignores request for the favicon.',
                    run: (req, res, next) => {
                        if (req.url === '/favicon.ico') {
                            console.log('Favicon request.');
                            res.writeHead(200, {'Content-Type': 'image/x-icon'});
                            return res.end();
                        }
        
                        next();
                    }
                },
                {
                    description: 'This middleware adds an `$end` method to each response object that maps responses to the `api` service.',
                    run: (req, res, next) => {
        
                        /*
                         * adds a function to the HTTP `response` object, uses the API service to send the proper response
                         * @param data {*} data to send back to client
                         * @returns {*}
                         */
                        res.$end = (data) => {
                            if (data && data instanceof errors.BadRequestError) {
                                return api.sendBadRequest(res, data.message || data);
                            } else if (data && data instanceof errors.PermissionDeniedError) {
                                return api.sendUnauthorizedRequest(res, data.message || data);
                            } else if (data && data instanceof errors.ResourceLockedError) {
                                return api.sendResourceLocked(res, data.message || data);
                            } else if (data && data instanceof errors.ForbiddenError) {
                                return api.sendForbiddenResponse(res, data.message || data);
                            } else if (data && data instanceof errors.ResourceNotFoundError) {
                                return api.sendResourceNotFound(res, data.message || data);
                            } else if (data && data instanceof errors.ResourceNotModifiedError) {
                                return api.sendResourceNotModified(res, data.message || data);
                            } else if (data && data instanceof errors.ServerError) {
                                return api.sendServerError(res, data.message || data);
                            } else if(data && data instanceof errors.validationError) {
                                console.log("here",api.sendValidationError(res,data.message || data))
                                return api.sendValidationError(res,data.message || data);
                            } else if (data && data instanceof Error) {
                                return api.sendErrorResponse(res, data.message || data);
                            }
                            return api.sendOwnResponse(res, data);
                        };
                        next();
                    }
                },
                // {
                //     description: "This middleware function will validate the logged in user token",
                //     run: (req, res, next) => {
                //         if(utility.skipUrl(req.url)) {
                //            next();
                //         } else {
                //             let token = req.headers['x-user-token'];
                //             if(token) {
                //                 authController.updateUserSession(token).then(session => {
                //                     req.user = session;
                //                     logger.info('\nUser login details : ',session,'\n');
                //                     console.log('Session updated successfully ' + utility.add_minute_current_datetime(commonConstant.USER_SESSION_EXPIRY_TIME));
                //                     next();
                //                 })
                //                 .catch(res.$end);
                //             } else {
                //                 res.$end(utility.buildResponse(apiResponseConstant.INVALID_TOKEN));
                //             }
                //         }
                //     }
                // }
            ]
        }
    }

export default new middleware();
