import { Hono } from 'hono';
import quotes from 'kanyewest-quotes';

const app = new Hono();

app.get('/', (ctx) => {
	return ctx.json(quotes);
});

export default app;
