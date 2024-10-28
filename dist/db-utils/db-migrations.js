"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require('dotenv').config();
exports.db = require('./db-setup');
const createTickets = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS tickets (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      vatin VARCHAR(11) NOT NULL,
      creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    await exports.db.query(queryText);
};
const createPersons = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS persons (
      vatin VARCHAR(11) NOT NULL PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL
    );
  `;
    await exports.db.query(queryText);
};
const createTables = async () => {
    await createTickets();
    await createPersons();
};
createTables()
    .then(() => console.log('Tables created successfully.'))
    .catch((err) => console.error('Error creating tables:', err));
