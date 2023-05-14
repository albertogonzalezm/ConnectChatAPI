import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


// TODO: fix message type!!!
const MessageSchema = sequelize.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: false,
        defaultValue: []
    }
}, {
    freezeTableName: true
});

export default MessageSchema;