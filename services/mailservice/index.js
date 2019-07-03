/**
 * dependencies
 */
import q from 'q';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import logger from 'services/log';
import mandrill from 'mandrill-api/mandrill';

dotenv.config();

class mailService {

    constructor() {
        this.mailConfig = {
            service: 'gmail',
            auth: {
                user: 'Email-id',
                pass: 'password'
            }
        };
        this.mandrill_client = new mandrill.Mandrill('MANDRILL_API_KEY');
    }

    /**
     * @method sendMail
     * @description To send mail using nodemailer
     * @param mailOptions {Object}
     * @return {Object}
     */
    sendMail(mailOptions) {
        let deferred = q.defer();
        nodemailer.createTransport(this.mailConfig).sendMail(mailOptions, (err, info) => {
            if (err) {
                logger.error('mailService::sendMail',err);
            } else {
                logger.info('mailService::sendMail',info);
            }
        });
        deferred.resolve(true);
        return deferred.promise ;
    }

    /**
     * @method sendTemplate
     * @description To send mail using mailchimp
     * @param mailOptions {Object}
     * @return {Object}
     */
    sendTemplate(mailOptions) {
        let deferred = q.defer();
        this.mandrill_client.messages.sendTemplate(mailOptions, (result) => {
            logger.info('mailService::sendTemplate',result);
        }, (err) => {
            logger.error('mailService::sendTemplate',err);
        });
        deferred.resolve(true);
        return deferred.promise;
    }

}

export default new mailService();