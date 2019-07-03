/**
 * @module services/utility
 * @file This file has supportive utility methods
 */

import q from 'q';
import _ from 'lodash';
import crypto from 'crypto';
import bcrypt from 'bcrypt-nodejs';
import moment from 'moment-timezone';
import moment_local from 'moment';
import errorConstant from 'constant/errorconstant';
import apiResponseConstant from 'constant/apiresponseconstant';
import { formatNumber } from 'libphonenumber-js';
import uuid from  'uuid/v1';
import randomNumber from 'random-number';
import commonConstant from 'constant/commonconstant';

moment.tz.setDefault('utc');

/**
 * @class utilityService
 * @description This class has utiltiy methods for the api
 */
class utilityService {

    /**
     * @method skipUrl
     * @param url
     * @returns {Boolean}
     */
    skipUrl(url) {
        return (
            url.includes('/auth')
        );
    }

    /**
     * @method buildSuccessResponse
     * @description To build response object with success status type
     * @param api_response_code {String}
     * @param optional_msg {String}
     * @param setOptionalMsgOnly {Boolean}
     * @returns {Object} response
     */
    buildSuccessResponse (api_response_code,optional_msg='',setOptionalMsgOnly =false) {
        let message;
        if(!setOptionalMsgOnly) {
            message = errorConstant[api_response_code] // +' '+optional_msg;
        } else {
            message = optional_msg;
        }
        return {
            code: api_response_code,
            status: commonConstant.RESPONSE_TYPE_SUCCESS,
            message: message
        };
    }

     /**
      * @method buildResponse
      * @description To build response object with failure status type
      * @param api_response_code {String}
      * @param optional_msg {String}
      * @param setOptionalMsgOnly {Boolean}
      * @returns {Object} response
      */
    buildResponse (api_response_code,optional_msg='',setOptionalMsgOnly = false) {
        let message;
        if(!setOptionalMsgOnly) {
            message = errorConstant[api_response_code] // +' '+optional_msg;
        } else {
            message = optional_msg;
        }
         return {
            code: api_response_code,
            status: commonConstant.RESPONSE_TYPE_FAILURE,
            message: message
        };
    }
    
    /**
     * @method formatDate
     * @description Function to format date
     * @param date {Object}
     * @param date_format {String}
     * @returns {Object} Date object
     */
    formatDate (date, date_format) {
        return moment(date, ['DD-MM-YYYY', 'MM-DD-YYYY', 'YYYY-MM-DD', 'DD-MMM-YY', 'HH:mm:ss']).format(date_format);
    }
    
    /**
     * @method format_datetime
     * @description Function to format date
     * @param date {Object}
     * @param date_format {String}
     * @returns {Object} Date object
     */
    formatDateTime (date, date_format) {
        return moment(date, ['DD-MM-YYYY HH:mm:ss', 'MM-DD-YYYY HH:mm:ss', 'YYYY-MM-DD HH:mm:ss','hh:mm a']).format(date_format);
    }
    
     /**
      * @method current_date
      * @description Function to get current date
      * @returns {Object} Date object
      */
    currentDate () {
        return moment.utc().format('YYYY-MM-DD');
    }
    
    /**
     * @method current_datetime
     * @description Function to get current date with time
     * @returns {Object} Date object
     */
    current_datetime () {
        return moment.utc().format('YYYY-MM-DD HH:mm:ss');
    }

    /**
     * @method formatDateToUtc
     * @description Function to format a date in utc to a format
     * @param format
     * @param date
     * @returns {Object} Date object
     */
    formatDateToUtc(date,format) {
        return moment.utc(date).format(format);
    }

    /**
     * @method getUtcDate
     * @description Function to convert a date to UTC
     * @param date
     * @returns {Object} Date object
     */
    getUtcDate(date) {
        return moment.utc(date).format();
    }

    formatDateWithTz(date,timezone,format) {
        return moment_local(date).tz(timezone).format(format);
    }

    /**
     * @method formatCurrency
     * @description To format currency
     * @param amount
     * @returns {*}
     */
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }

    /**
     * @method formatPhone
     * @description To format phone number
     * @param phone
     * @returns {*}
     */
    formatPhone(phone) {
        return formatNumber({country:'US', phone:phone},'National');
    }

    /**
     * @method add_minute_current_datetime
     * @description Function to add minutes to current time
     * @param minutes {Integer}
     * @returns {Object} Date object
     */
    add_minute_current_datetime (minutes) {
        return moment().add(minutes,'minutes').utc().format('YYYY-MM-DD HH:mm:ss');
    }
    
     /**
     * @method add_minutes
     * @description Function to add minutes to given datetime
     * @param date {Date}
     * @param minutes {Integer}
     * @returns {Object} Date object
     */
    add_minutes (date,minutes) {
         return moment.utc(date).add(minutes,'m').format('YYYY-MM-DD HH:mm:ss');
        // let updatedDate = new Date(date.getTime() + (parseInt(minutes) * 60 * 1000));
        // return moment(updatedDate).format('YYYY-MM-DD HH:mm:ss');
    }

    /**
     * @method getDiff
     * @description Function to get diff in minutes between two datetimes
     * @param start_date {Date}
     * @param end_date {Date}
     * @returns {Object} Date object
     */
    getDiff (start_date,end_date) {
        return moment(end_date).diff(moment(start_date),'minutes')
    }

    /**
     * @description To hash a token for password reset
     * @param hashValue {String} User id and current time
     * @returns {String} Hash value
     */
    hashToken(hashValue) {
        return crypto.createHash('sha256').update(hashValue).digest('hex');
    }

    /**
     * @method hashPassword
     * @description To encrypt a password
     * @param password {String}
     * @returns {hash}
     */
    hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(commonConstant.SALT_ROUNDS));
    }

    /**
     * @method comparePassword
     * @description To compare hashed password and plain password
     * @param hashedPassword {String}
     * @param plainPassword {String}
     * @returns {boolean}
     */
    comparePassword(hashedPassword,plainPassword) {
        return bcrypt.compareSync(plainPassword, hashedPassword);
    }

    /**
     * @method isApplicationError
     * @description Check error type is Application error or Custom error
     * @param error {Object}
     * @returns {boolean}
     */
    isApplicationError(error) {
        return error instanceof Error;
    }

    /**
     * @method generateRandomCode
     * @description To genereate a four digit random code
     * @return {*}
     */
    generateRandomCode() {
        let code = randomNumber.generator({
            min:  1000,
            max:  9999,
            integer: true
        });
        return code();
    }
}

export default new utilityService();
