const { Client } = require('pg');
const Sequelize = require('sequelize');
const Users = require('../app/models/Users');
const Messages = require('../app/models/Messages');

const models = [Users, Messages];
const databaseConfig = require('../configs/db');

class Database {
    constructor() {
        this.init = this.init.bind(this);
    }

    async init() {
        try {
            await this.createDatabaseIfNotExists();
            this.connection = new Sequelize(databaseConfig);

            models
                .map((model) => model.init(this.connection))
                .map((model) => model.associate && model.associate(this.connection.models));

            var log = await this.connection.authenticate();
            console.log('Database connection has been established successfully.');
        } catch (err) {
            console.error('Unable to connect to the database:', err);
            throw err;
        }
    }

    async createDatabaseIfNotExists() {
        const { username, password, host, port, database } = databaseConfig;

        const client = new Client({
            user: username,
            host: host,
            password: password,
            port: port,
        });

        try {
            await client.connect();
            const res = await client.query(`SELECT 1 FROM pg_database WHERE datname='${database}'`);
            if (res.rowCount === 0) {
                await client.query(`CREATE DATABASE "${database}"`);
                console.log(`Database "${database}" created successfully.`);
            } else {
                console.log(`Database "${database}" already exists.`);
            }
        } catch (err) {
            console.error('Error creating database:', err);
            throw err;
        } finally {
            await client.end();
        }
    }
}

module.exports = new Database();
