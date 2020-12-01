import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:1895@localhost:3306/pitu');

export default sequelize;