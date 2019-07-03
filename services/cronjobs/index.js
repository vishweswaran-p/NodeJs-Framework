import q from 'q';
import cron from 'cron';
import dotenv from 'dotenv';
import logger from 'services/log';
import utility from 'services/utility';
import dbConnection from 'services/mysql';
import apiResponseConstant from 'constant/apiresponseconstant';
import * as errors from 'middleware/errors';
import commonConstant from 'constant/commonconstant';
import moment from 'moment-timezone';

dotenv.config();

const cronJob = cron.CronJob;

class cronJobsService {

    constructor() {
        this.cronJobs = [
            // {
            //     description:'Cron to update subscription plan for android users',
            //     run:() => {
            //         new cronJob('pattern will be here', () => {
            //             this.updateUserSubscriptionForAndroid().then(result => {
            //                 logger.info('Cron job executed successfully - updateUserSubscription - ANDROID');
            //             })
            //             .catch(err => {
            //                 logger.error('cronJobServices::updateUserSubscription-ANDROID',err);
            //             })
            //         }, null, true, commonConstant.CRON_TIMEZONE);
            //     }
            // },
        ]
    }
}

export default new cronJobsService();