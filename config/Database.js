import { Sequelize } from "sequelize";

const db = new Sequelize('umsu', 'postgres', 'admin',{
    host: 'localhost',
    dialect: 'postgres'
});

export default db;