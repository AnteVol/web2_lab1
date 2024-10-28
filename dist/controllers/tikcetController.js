"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTicketById = exports.createTicket = exports.totalTicketCount = void 0;
const qrcode_1 = __importDefault(require("qrcode"));
const uuid_1 = require("uuid");
const PersonTicketModel_1 = require("../models/PersonTicketModel");
const pageGenerator_1 = require("../pageGenerator");
function validatePerson(vatin, firstName, lastName) {
    if (!vatin.trim() || !firstName.trim() || !lastName.trim()) {
        return false;
    }
    return true;
}
const totalTicketCount = async (req, res) => {
    try {
        const ticketCount = await PersonTicketModel_1.PersonTicketModel.getTicketNumber();
        res.json(ticketCount);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};
exports.totalTicketCount = totalTicketCount;
const createTicket = async (req, res) => {
    const { vatin, firstName, lastName } = req.body;
    if (!validatePerson(vatin, firstName, lastName)) {
        return res.status(400).send('One or more person parameters are missing');
    }
    try {
        const numberOfTickets = await PersonTicketModel_1.PersonTicketModel.ticketsForPerson(vatin);
        if (numberOfTickets >= 3) {
            return res.status(400).send('This person already owns 3 tickets.');
        }
        const ticketId = (0, uuid_1.v4)();
        await PersonTicketModel_1.PersonTicketModel.createTicket(ticketId, vatin, firstName, lastName);
        const ticketUrl = `https://web2-lab1-ef2l.onrender.com/ticket/${ticketId}`;
        const qrCodeImage = await qrcode_1.default.toBuffer(ticketUrl);
        res.set('Content-Type', 'image/png');
        return res.status(201).send(qrCodeImage);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
    }
};
exports.createTicket = createTicket;
const getTicketById = async (req, res) => {
    const { id } = req.params;
    try {
        const ticket = await PersonTicketModel_1.PersonTicketModel.getTicketById(id);
        if (!ticket) {
            return res.sendStatus(404);
        }
        const response = (0, pageGenerator_1.generateTicketHtml)(ticket.vatin, ticket.first_name, ticket.lastName, ticket.creation_date, req.oidc.user);
        res.send(response);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};
exports.getTicketById = getTicketById;
