import {handle} from 'hono/vercel'
import app from '../src/index'

export const GET = handle(app)
export const POST = handle(app)

const app = new Hono();

app.get('/', (c) => {
  return c.html(`
     
      `)
});

app.get('/cdn/*', (c) => {
  c.header('Cache-Control', 'public, max-age=31536000, immutable')
return c.text('MEFW Debug: Edge CDNからアセットが正常に配信されました！利用可能です。')
});

export default app
