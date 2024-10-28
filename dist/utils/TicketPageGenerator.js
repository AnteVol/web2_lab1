"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTicketHtml = generateTicketHtml;
function generateTicketHtml(vatin, firstName, lastName, creation_date, user) {
    return `
    <html>
      <head>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
          }
          .ticket-details {
            max-width: 600px;
            padding: 30px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .ticket-details h1 {
            font-size: 28px;
            margin-bottom: 20px;
            color: #333;
          }
          .ticket-details p {
            font-size: 18px;
            margin: 10px 0;
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
          <p><strong>Person vatin:</strong> ${vatin}</p>
          <p><strong>First name:</strong> ${firstName}</p>
          <p><strong>Last name:</strong> ${lastName}</p>
          <p><strong>Created at:</strong> ${new Date(creation_date).toLocaleString()}</p>
          <p><strong>Current user:</strong> ${user}</p>
        </div>
      </body>
    </html>
  `;
}
