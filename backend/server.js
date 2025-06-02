const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

const tickets = [];

router.get('/tickets', (ctx) => {
  ctx.body = tickets;
});

router.get('/tickets/:id', (ctx) => {
  const ticket = tickets.find(t => t.id === parseInt(ctx.params.id));
  if (ticket) {
    ctx.body = ticket;
  } else {
    ctx.status = 404;
    ctx.body = { message: 'Ticket not found' };
  }
});

router.post('/tickets', (ctx) => {
  const { name, description, status } = ctx.request.body;
  const newTicket = {
    id: tickets.length + 1,
    name,
    description,
    status,
    created: new Date().toISOString(),
  };
  tickets.push(newTicket);
  ctx.status = 201;
  ctx.body = newTicket;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
