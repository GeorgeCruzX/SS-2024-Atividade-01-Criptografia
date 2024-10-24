import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
    MYSQL_DB = 'meubanco', 
    MYSQL_USER = 'meuusuario', 
    MYSQL_PASSWORD = 'minhasenha',
    MYSQL_HOST = 'localhost',
    MYSQL_PORT = '3306'
} = process.env;

export const sequelize = new Sequelize(
    MYSQL_DB,
    MYSQL_USER,
    MYSQL_PASSWORD,
    {
        dialect: 'mysql',
        host: MYSQL_HOST,
        port: parseInt(MYSQL_PORT),
        logging: false,
    }
);
