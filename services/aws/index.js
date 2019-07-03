import q from 'q';
import fs from 'fs';
import logger from 'services/log';
import * as AWS from 'aws-sdk';
import utility from 'services/utility';
import apiResponseConstant from 'constant/apiresponseconstant'
import commonConstant from 'constant/commonconstant';
import config from 'config'
import * as errors from 'middleware/errors';

let baseDir = process.cwd();

AWS.config.update({
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    region: config.AWS_REGION,
    signatureVersion : 'v4'
});

const s3 = new AWS.S3({signatureVersion: 'v4'});

class awsService {

    /**
     * Function to upload a file to s3
     * @param s3Params {Object}
     * @param localFilePath {String}
     * @returns result {Object}
     */
    s3Upload (s3Params, localFilePath) {
        let deferred = q.defer();
        fs.readFile(localFilePath,(err,fileBody) => {
            if(err) {
                logger.error('AWSBucketService::s3Upload(readingFromLocal)',err);
                deferred.reject(utility.buildResponse(apiResponseConstant.UNKNOWN_ERROR_OCCURRED));
            } else {
                s3Params.Body = fileBody;
                s3.upload(s3Params,(err,result) => {
                    if(err) {
                        logger.error('AWSService::s3Upload',err);
                        deferred.reject(utility.buildResponse(apiResponseConstant.UNKNOWN_ERROR_OCCURRED));
                    } else {
                        deferred.resolve(result);
                    }
                })
            }
        });
        return deferred.promise;
    }

    /**
     * @method getViewUrlForFile
     * @param location
     * @param dispositionValue
     * @returns {*}
     */
    getViewUrlForFile(location, dispositionValue) {
        let deferred = q.defer();
        s3.getSignedUrl('getObject', {
            Expires: commonConstant.S3_URL_EXPIRES_IN || 900,
            Bucket: config.AWS_BUCKET,
            Key: location,
            ResponseContentDisposition :dispositionValue,
            ResponseContentType:'application/octet-stream'
        }, (err, url) => {
            if (err) {
                logger.error('AWSService::getViewUrlForFile',err);
                deferred.reject(new errors.ServerError(apiResponseConstant.UNKNOWN_ERROR_OCCURRED));
            } else {
                deferred.resolve(url);
            }
        });
        return deferred.promise;
    }



}
export default new awsService();
