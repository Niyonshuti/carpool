const Sequelize = require('sequelize');

class Sample extends Sequelize.Model {
    static associate(models) { }
}

Sample.init(
    {
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        body: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },
    {
        hooks: {
            beforeFind: (options) => {

            },
            beforeUpdate: (model, options) => {

            }
        },
        sequelize
    }
);

exports.Sample = Sample;
