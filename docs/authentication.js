/**
* @api {post} /auth/login 01.Login
* @apiDescription Used to authenticate a user with email and password
* @apiVersion 1.0.0
* @apiName 01.Login
* @apiGroup Authentication
* @apiPermission none
*
* @apiParam {String} email Email id of the user. <code>Required</code>
* @apiParam {String} password Password of the user as <b class="text-success">base64 encoded string</b>. <code>Required</code>
*
* @apiExample Request body
*  {
*   "email":"xxx@gmail.com",
*   "password":"xxyyzzzz"
*  }
*
* @apiExample Success response
* {
*   "code": "0000",
*   "status": "success",
*   "data": "Login success."
* }
*
*
* @apiExample Failure response
* {
*    "code": "9999",
*    "status": "failure",
*    "message": [
*        {
*            "field": "email",
*            "message": "Email Id is not valid"
*        },
*        {
*            "field": "password",
*            "message": "Password should not be empty."
*        }
*    ]
* }
*
*/

