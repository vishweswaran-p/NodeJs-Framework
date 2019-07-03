const CommonConstant = {

    RESPONSE_TYPE_SUCCESS:'success',
    RESPONSE_TYPE_FAILURE:'failure',

    APP_HOME_URL:'http://localhost:8000',

    EMAIL_DATE_FORMAT:'dddd, MMMM Do YYYY',
    EMAIL_DATE_TIME_FORMAT:'dddd, MMMM Do YYYY, h:mm a',

    EMAIL_VERIFICATION_EXPIRY_TIME:14400, // 10 days(in minutes),
    PASSWORD_RESET_EXPIRY_TIME:14440, // 10 days(in minutes),
    USER_SESSION_EXPIRY_TIME:43200, // 30 days(in minutes)

    DEFAULT_PAGINATION_OFFSET:0,
    DEFAULT_PAGINATION_LIMIT:20,

    CRON_TIMEZONE:'UTC',
    CRON_PATTERN:'*/30 * * * *',
};

export default CommonConstant;
