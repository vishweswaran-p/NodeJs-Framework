/**
 * dependencies
 */
import dotenv from 'dotenv';
dotenv.config();

//common configurations for all the environments
let commonConfig = {
    enableClusterMode: false,
    AWS_ACCESS_KEY_ID:'sample',
    AWS_SECRET_ACCESS_KEY:'sample'
};

let config = {};

switch(process.env.NODE_ENV) {
    case 'DEVELOPMENT' : {
        config = {
            DB_HOST:'localhost',
            DB_USER:'root',
            DB_PASS:'root',
            DB_NAME:'db_name',
            PORT:8000
        };
        break;
    }
    case 'PRODUCTION' : {
        config = {
            DB_HOST:'localhost',
            DB_USER:'root',
            DB_PASS:'root',
            DB_NAME:'db_name',
            PORT:3000
        };
        break;
    }
    case 'TESTING' : {
        config = {
            DB_HOST:'localhost',
            DB_USER:'root',
            DB_PASS:'root',
            DB_NAME:'db_name',
            PORT:7000
        };
        break;
    }
    default : {
        config = {
            DB_HOST:'localhost',
            DB_USER:'root',
            DB_PASS:'root',
            DB_NAME:'db_name',
            PORT:8000
        }
    }
}

//Copy the common configurations to the export variable
Object.assign(config, commonConfig);

export default config;
