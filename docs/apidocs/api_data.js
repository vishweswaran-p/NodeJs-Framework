define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "01.Login",
    "description": "<p>Used to authenticate a user with email and password</p>",
    "version": "1.0.0",
    "name": "01_Login",
    "group": "Authentication",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email id of the user. <code>Required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user as <b class=\"text-success\">base64 encoded string</b>. <code>Required</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request body",
        "content": "{\n \"email\":\"xxx@gmail.com\",\n \"password\":\"xxyyzzzz\"\n}",
        "type": "json"
      },
      {
        "title": "Success response",
        "content": "{\n  \"code\": \"0000\",\n  \"status\": \"success\",\n  \"data\": \"Login success.\"\n}",
        "type": "json"
      },
      {
        "title": "Failure response",
        "content": "{\n   \"code\": \"9999\",\n   \"status\": \"failure\",\n   \"message\": [\n       {\n           \"field\": \"email\",\n           \"message\": \"Email Id is not valid\"\n       },\n       {\n           \"field\": \"password\",\n           \"message\": \"Password should not be empty.\"\n       }\n   ]\n}",
        "type": "json"
      }
    ],
    "filename": "docs/authentication.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "",
    "url": "/",
    "title": "Error responses",
    "description": "<p>The below mentioned failure responses are common for most of the endpoints.</p>",
    "version": "1.0.0",
    "name": "General_Responses",
    "group": "General",
    "examples": [
      {
        "title": "Unable to process",
        "content": "{\n  \"code\": \"1001\",\n  \"status\": \"failure\",\n  \"message\": \"Unable to process the request\"\n}",
        "type": "json"
      },
      {
        "title": "Unauthorized access",
        "content": "{\n  \"code\": \"1000\",\n  \"status\": \"failure\",\n  \"message\": \"Unauthorized access\"\n}",
        "type": "json"
      },
      {
        "title": "Invalid token",
        "content": "{\n  \"code\": \"1002\",\n  \"status\": \"failure\",\n  \"message\": \"Your session has been expired.\"\n}",
        "type": "json"
      },
      {
        "title": "User not found",
        "content": "{\n  \"code\": \"1006\",\n  \"status\": \"failure\",\n  \"message\": \"User not found\"\n}",
        "type": "json"
      },
      {
        "title": "Validation error",
        "content": "{\n  \"code\": \"9999\",\n  \"status\": \"failure\",\n  \"errors\": [\n      {\n          \"field\": \"email\",\n          \"message\": \"Email Id is not valid\"\n      },\n      {\n          \"field\": \"password\",\n          \"message\": \"password should be between 4 and 15 characters.\"\n      }\n   ]\n}",
        "type": "json"
      }
    ],
    "filename": "docs/apidoc_error_codes.js",
    "groupTitle": "General"
  },
  {
    "type": "",
    "url": "/",
    "title": "Pagination",
    "description": "<p>The below mentioned keys must be passed in query params to get paginated result.</p>",
    "version": "1.0.0",
    "name": "Pagination",
    "group": "General",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum number of records to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset from where to start the records.</p>"
          }
        ]
      }
    },
    "filename": "docs/apidoc_error_codes.js",
    "groupTitle": "General"
  },
  {
    "type": "",
    "url": "/",
    "title": "Request headers",
    "description": "<p>The below mentioned key value pairs are the accepted request headers.</p>",
    "version": "1.0.0",
    "name": "Request_headers",
    "group": "General",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "x-user-token",
            "description": "<p>User authentication token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"application/json\"",
              "\"multipart/form-data\""
            ],
            "optional": false,
            "field": "content-type",
            "description": "<p>Content type for request data.</p>"
          }
        ]
      }
    },
    "filename": "docs/apidoc_error_codes.js",
    "groupTitle": "General"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "docs/apidocs/main.js",
    "group": "_home_vishnu_VScode_node_framework_server_docs_apidocs_main_js",
    "groupTitle": "_home_vishnu_VScode_node_framework_server_docs_apidocs_main_js",
    "name": ""
  }
] });
