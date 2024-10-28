export function generateHomepageHtml(ticketCount: number): string {
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
            .container {
              max-width: 600px;
              padding: 30px;
              background-color: #ffffff;
              border: 1px solid #ddd;
              border-radius: 10px;
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
              text-align: center;
            }
            h1 {
              font-size: 28px;
              margin-bottom: 20px;
              color: #333;
            }
            p {
              font-size: 18px;
              margin: 10px 0;
              color: #555;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to web2 lab1 ticket generator!</h1>
            <p>Total 🎫 generated so far: <strong>${ticketCount}</strong></p>
          </div>
        </body>
      </html>
    `;
  }
  