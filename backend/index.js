import express from 'express';
import cors from 'cors';
import { nanoid } from 'nanoid';

const app = express();
const PORT = 7070;
app.use(cors());
app.use(express.json());

let tickets = [];

app.get('/tickets', (req, res) => {
  res.json(tickets.map(({ id, name, status, created }) => ({ id, name, status, created })));
});

app.get('/tickets/:id', (req, res) => {
  const ticket = tickets.find(t => t.id === req.params.id);
  ticket ? res.json(ticket) : res.status(404).end();
});

app.post('/tickets', (req, res) => {
  const { name, description } = req.body;
  const newTicket = {
    id: nanoid(),
    name,
    description,
    status: false,
    created: new Date().toISOString()
  };
  tickets.push(newTicket);
  res.json(newTicket);
});

app.put('/tickets/:id', (req, res) => {
  const ticket = tickets.find(t => t.id === req.params.id);
  if (!ticket) return res.status(404).end();
  const { name, description, status } = req.body;
  if (name !== undefined) ticket.name = name;
  if (description !== undefined) ticket.description = description;
  if (status !== undefined) ticket.status = status;
  res.json(ticket);
});

app.delete('/tickets/:id', (req, res) => {
  tickets = tickets.filter(t => t.id !== req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
