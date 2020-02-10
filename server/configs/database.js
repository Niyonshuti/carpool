const Sequelize = require('sequelize');
const debug = require('debug')('server');

const { DatabaseConfig, AppConfig } = require('.');

const dbEnvironment = DatabaseConfig(AppConfig.environment);

module.exports = async (callback) => {
    try {
        const sequelize = await new Sequelize(dbEnvironment.database, dbEnvironment.username, dbEnvironment.password, {
            dialect: dbEnvironment.dialect,
            dialectOptions: dbEnvironment.dialectOptions,
            host: dbEnvironment.host,
            port: dbEnvironment.port,
            ssl: dbEnvironment.ssl,
            timezone: dbEnvironment.timezone,
            version: true
        });
        global.sequelize = sequelize;
        callback(sequelize);
    } catch (error) {
        console.log('Could not connect to the database');
        debug(error);
    }
};
