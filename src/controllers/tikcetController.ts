import { Request, Response } from 'express';
import qr from 'qrcode';
import { v4 as uuid } from 'uuid';
import { PersonTicketModel } from '../models/PersonTicketModel';
import { generateTicketHtml } from '../pageGenerator'

function validatePerson(vatin: string, firstName: string, lastName: string): boolean{
    if (!vatin.trim() || !firstName.trim() || !lastName.trim()) {
        return false;
    }
    return true;
}

export const totalTicketCount = async (req: Request, res: Response) => {
  try {
    const ticketCount = await PersonTicketModel.getTicketNumber();
    res.json(ticketCount);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const createTicket = async (req: Request, res: Response) => {
  const { vatin, firstName, lastName } = req.body;

  if (!validatePerson(vatin, firstName, lastName)) {
    return res.status(400).send('One or more person parameters are missing');
  }

  try {
    const numberOfTickets = await PersonTicketModel.ticketsForPerson(vatin);

    if (numberOfTickets >= 3) {
      return res.status(400).send('This person already owns 3 tickets.');
    }

    const ticketId = uuid();
    await PersonTicketModel.createTicket(ticketId, vatin, firstName, lastName);

    const ticketUrl = `https://web2-lab1-ef2l.onrender.com/ticket/${ticketId}`;
    const qrCodeImage = await qr.toBuffer(ticketUrl); 
    res.set('Content-Type', 'image/png');
    return res.status(201).send(qrCodeImage);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
};


  export const getTicketById = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const ticket = await PersonTicketModel.getTicketById(id);
      if (!ticket) {
        return res.sendStatus(404);
      }
      const response = generateTicketHtml(ticket.vatin, ticket.first_name, ticket.lastName, ticket.creation_date, req.oidc.user)
      res.send(response);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  };