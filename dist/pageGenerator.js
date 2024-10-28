"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTicketHtml = generateTicketHtml;
function generateTicketHtml(vatin, firstName, lastName, creation_date, user) {
    return `
      <html>
        <head>
          <style>
            .ticket-details {
              max-width: 500px;
              margin: 20px auto;
              padding: 20px;
              background-color: #f9f9f9;
              border: 1px solid #ddd;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              font-family: Arial, sans-serif;
            }
            .ticket-details h1 {
              font-size: 24px;
              margin-bottom: 16px;
              color: #333;
              text-align: center;
            }
            .ticket-details p {
              font-size: 16px;
              margin: 8px 0;
              color: #555;
            }
            .ticket-details p strong {
              color: #333;
            }
          </style>
        </head>
        <body>
          <div class="ticket-details">
            <h1>Ticket details</h1>
            <p><strong>Vatin:</strong> ${vatin}</p>
            <p><strong>First name:</strong> ${firstName}</p>
            <p><strong>Last name:</strong> ${lastName}</p>
            <p><strong>Created at:</strong> ${new Date(creation_date).toLocaleString()}</p>
            <p><strong>User:</strong> ${user}</p>
          </div>
        </body>
      </html>
    `;
}
