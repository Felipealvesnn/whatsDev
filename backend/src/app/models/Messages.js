const { Model, DataTypes } = require('sequelize');

class Message extends Model {
    static init(sequelize) {
        return super.init(
            {
                text: DataTypes.STRING,
                user_destination: DataTypes.INTEGER,
                user_id: DataTypes.INTEGER,
            },
            {
                sequelize,
                modelName: 'Message',
                tableName: 'messages', // opcional, para definir o nome da tabela explicitamente
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Message;
