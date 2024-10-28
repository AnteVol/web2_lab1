"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonTicketModel = void 0;
const db_setup_1 = require("../db-utils/db-setup");
const db_migrations_1 = require("../db-utils/db-migrations");
exports.PersonTicketModel = {
    async getTicketNumber() {
        const result = await (0, db_setup_1.query)('SELECT * FROM tickets', []);
        return result.rows.length;
    },
    async getTicketById(ticketId) {
        const result = await db_migrations_1.db.query('SELECT * FROM tickets WHERE id = $1', [ticketId]);
        return result.rows[0];
    },
    async getPersonByVatin(vatin) {
        const result = await db_migrations_1.db.query('SELECT * FROM persons WHERE vatin = $1', [vatin]);
        return result.rows[0];
    },
    async ticketsForPerson(vatin) {
        const result = await db_migrations_1.db.query('SELECT COUNT(*) FROM tickets WHERE vatin = $1', [vatin]);
        return parseInt(result.rows[0].count, 10);
    },
    async createTicket(ticketId, vatin, firstName, lastName) {
        const personExists = await (0, db_setup_1.query)('SELECT * FROM persons WHERE vatin = $1', [vatin]);
        if (personExists.rows.length === 0) {
            await (0, db_setup_1.query)('INSERT INTO persons (vatin, first_name, last_name) VALUES ($1, $2, $3)', [vatin, firstName, lastName]);
        }
        await (0, db_setup_1.query)('INSERT INTO tickets (id, vatin) VALUES ($1, $2)', [ticketId, vatin]);
    }
};
