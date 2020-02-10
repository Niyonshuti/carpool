const { Sample } = require('./Sample');

// Create association in ORM
Object.values(sequelize.models)
    .filter((model) => {
        return typeof model.associate === 'function';
    })
    .forEach((model) => {
        model.associate(sequelize.models);
    });

exports.Sample = Sample;