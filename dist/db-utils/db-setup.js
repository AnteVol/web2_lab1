"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
const query = (text, params) => pool.query(text, params);
exports.query = query;
