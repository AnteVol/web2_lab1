import { Router } from 'express';
import { createTicket, getTicketById, totalTicketCount } from '../controllers/tikcetController';
import { TokenValidation } from '../middlewares/Auth';
const { requiresAuth } = require('express-openid-connect');

const router = Router();

router.get('/', totalTicketCount);
router.post('/ticket', TokenValidation, createTicket);
router.get('/ticket/:id', requiresAuth(), getTicketById);

export default router;
