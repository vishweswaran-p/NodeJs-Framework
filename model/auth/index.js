/**
  * Auth Model
  * @module model/auth
  * @file This file has methods for auth verification process
  * @author vishnu
  */

import q from 'q'
import apiResponseConstant from 'constant/apiresponseconstant'
import logger from 'services/log'
import * as errors from 'middleware/errors';

/**
 * @class auth Model
 * @description This class has methods for user authentication
 */
class authModel {

    /**
     * @method dummyMethod
     * @description Description of then method
     * @param connection {Object} MySQL connection object
     * @param args {String}
     * @returns tokenCount {Number}
     */
    dummyMethod(connection, args) {
        let deferred = q.defer();
        let selectSql = '';
        connection.query(selectSql, [args], (err, result) => {
            if (err) {
                logger.error('AuthModel::dummyMethod',err);
                deferred.reject(new errors.ServerError(apiResponseConstant.UNKNOWN_ERROR_OCCURRED));
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

}

export default new authModel();