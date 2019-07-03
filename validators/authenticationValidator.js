export const emailLogin = {
    'email': {
        notEmpty: true,
        optional: false,
        isLength: {
            options: [
                {max: 255}
            ],
            errorMessage: 'Email Id should be less than 255 characters.'
        },
        isEmail:{
            errorMessage: 'Email Id is not valid'
        },
        errorMessage: 'Email should not be empty.'
    },
    'password': {
        notEmpty: true,
        optional: false,
        errorMessage: 'Password should not be empty.'
    }
};