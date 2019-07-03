/** 
  * @module controller/auth 
  * @file This file is the controller for user authentication
  * @author vishnu
  */

/** dependencies */
import q from 'q';
import moment from 'moment-timezone';
import dbConnection from 'services/mysql';
import utility from 'services/utility';
import apiResponseConstant from 'constant/apiresponseconstant';
import authModel from 'model/auth';
import logger from 'services/log';
import commonConstant from 'constant/commonconstant';
import * as errors from 'middleware/errors';
import mailService from 'services/mailservice';


/**
 * @class authController
 * @description This class has controller methods for user authentication
 */
class authController {

    /**
     * @method login
     * @description Function to authenticate a user
     * @param {Object} data
     * @returns {Object} user
     */
    login(data) {
        let deferred = q.defer();
        deferred.resolve('Login success.');
        return deferred.promise;
    }
}

export default new authController();