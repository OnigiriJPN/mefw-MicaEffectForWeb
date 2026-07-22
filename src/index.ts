import { serveStatic } from 'hono/vercel'
import { Hono } from 'Hono'
/* import app from '../src/index'

export const GET = handle(app)
export const POST = handle(app)

const app = new Hono();*/

app.get('/styles/*', serveStatic({ root: './public' }));
app.get('/', serveStatic({ path: '.public/index.html'}));

app.get('/cdn/*', (c) => {
  c.header('Cache-Control', 'public, max-age=31536000, immutable')
return c.text('MEFW Debug: Edge CDNからアセットが正常に配信されました！利用可能です。')
});

export default app
