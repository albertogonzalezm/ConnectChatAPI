import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';

const MessageSchema = sequelize.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default MessageSchema;