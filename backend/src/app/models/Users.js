const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,

            },
            {
                sequelize,
                underscored: true,
                tableName: 'Users', // opcional, para definir o nome da tabela explicitamente
            }
        );
    }

    static associate(models) {
        this.hasMany(models.Message, { foreignKey: 'user_id', as: 'messages' });
    }
}

module.exports = User;
