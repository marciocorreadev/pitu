import { Link } from './link';
import Sequelize, {Optional, Model} from 'sequelize';
import database from '../db/database';

interface ILinkCreationAttributes extends Optional<Link, "id"> { };
export interface ILinkModel extends Model<Link, ILinkCreationAttributes>, Link { };

const linkModel = database.define<ILinkModel>('link', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    url: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    code: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    hits: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
});

export default linkModel;