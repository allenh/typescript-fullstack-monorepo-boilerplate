import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as cors from '@koa/cors';

const app: Koa = new Koa();
const router: Router = new Router();

// index route
router.get('/', async (ctx, next) => {
  ctx.body = { msg: '200 OK' };

  return next();
});

// Middlewares
app.use(json());
app.use(logger());
app.use(cors());

// Routes
app.use(router.routes()).use(router.allowedMethods());

const port = 3000;

app.listen(port, () => {
  console.log(`Koa started on port: ${port}`);
});
