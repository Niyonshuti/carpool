const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

exports.AppConfig = {
	timezone: process.env.TIMEZONE,
	environment: process.env.NODE_ENV,
	port: process.env.APP_PORT,
	hostname: process.env.APP_HOST,
	companyName: process.env.COMPANY_NAME,
	apiURL: process.env.API_HOST + `/${process.env.API_VERSION}/`,
	apiRoot: process.env.API_ROOT + `${process.env.API_VERSION}/`,
	tokenSecret: process.env.TOKEN_SECRET,
	tokenTimeout: parseInt(process.env.LOGIN_TIMEOUT, 10) * 60,
	fileSize: process.env.DOCUMENT_FILE_SIZE
};

exports.EmailConfig = {
	domain: process.env.MAIL_DOMAIN_NAME
};

exports.FirebaseConfig = {};

exports.DatabaseConfig = (environment) => {
	return {
		dialect: process.env.DB_DRIVER,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		timezone: process.env.TIMEZONE,
		ssl: process.env.DB_SSL === 'TRUE',
		dialectOptions: (() => {
			return process.env.DB_SSL === 'TRUE'
				? {
						ssl: {
							cert: fs.readFileSync(path.resolve('ca-certificate.crt'))
						}
					}
				: {};
		})()
	};
};
