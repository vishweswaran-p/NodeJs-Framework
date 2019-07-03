/**
* @api / Error responses
* @apiDescription The below mentioned failure responses are common for most of the endpoints.
* @apiVersion 1.0.0
* @apiName General Responses
* @apiGroup General
*
* @apiExample Unable to process
*  {
*    "code": "1001",
*    "status": "failure",
*    "message": "Unable to process the request"
*  }
*
* @apiExample Unauthorized access
*  {
*    "code": "1000",
*    "status": "failure",
*    "message": "Unauthorized access"
*  }
*
* @apiExample Invalid token
*  {
*    "code": "1002",
*    "status": "failure",
*    "message": "Your session has been expired."
*  }
*
* @apiExample User not found
*  {
*    "code": "1006",
*    "status": "failure",
*    "message": "User not found"
*  }
*
* @apiExample Validation error
* {
*   "code": "9999",
*   "status": "failure",
*   "errors": [
*       {
*           "field": "email",
*           "message": "Email Id is not valid"
*       },
*       {
*           "field": "password",
*           "message": "password should be between 4 and 15 characters."
*       }
*    ]
* }
*
*/

/**
* @api / Pagination
* @apiDescription The below mentioned keys must be passed in query params to get paginated result.
* @apiVersion 1.0.0
* @apiName Pagination
* @apiGroup General
*
* @apiParam {Number} limit Maximum number of records to be returned.
* @apiParam {Number} offset Offset from where to start the records.
*
*/

/**
 * @api / Request headers
 * @apiDescription The below mentioned key value pairs are the accepted request headers.
 * @apiVersion 1.0.0
 * @apiName Request headers
 * @apiGroup General
 *
 * @apiParam {String} x-user-token User authentication token.
 * @apiParam {String="application/json","multipart/form-data"} content-type  Content type for request data.
 *
 */