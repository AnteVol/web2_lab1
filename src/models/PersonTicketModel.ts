import {query} from '../db-utils/db-setup';
import {db} from '../db-utils/db-migrations';

export const PersonTicketModel = {
  async getTicketNumber() {
    const result = await query('SELECT * FROM tickets', []);
    return result.rows.length;
  },
  
  async getTicketById(ticketId: string) {
    const result = await db.query('SELECT * FROM tickets WHERE id = $1', [ticketId]);
    return result.rows[0];
  },

  async ticketsForPerson(vatin: string) {
    const result = await db.query(
      'SELECT COUNT(*) FROM tickets WHERE vatin = $1',
      [vatin]
    );
    return parseInt(result.rows[0].count, 10);
  },

  async createTicket(ticketId: string, vatin: string, firstName: string, lastName: string) {
    const personExists = await query('SELECT * FROM persons WHERE vatin = $1', [vatin]);

    if (personExists.rows.length === 0) {
      await query(
        'INSERT INTO persons (vatin, first_name, last_name) VALUES ($1, $2, $3)',
        [vatin, firstName, lastName]
      );
    }

    await query(
      'INSERT INTO tickets (id, vatin) VALUES ($1, $2)',
      [ticketId, vatin]
    );
  }
};
