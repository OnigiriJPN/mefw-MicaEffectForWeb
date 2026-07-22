import {handle} from 'hono/vercel'
import app from '../src/index'

export const GET = handle(app)
export const POST = handle(app)

const app = new Hono();

app.get('/', (c) => {
  return c.html(`
     <!DOCTYPE html>
     <html lang="ja">
        <head>
           <meta charset="UTF-8" />
           <title>MEFW - CDN ダッシュボード</title>
           <link rel="stylesheet" href="styles.css" />
           <style>
              h1 { font-size: 1.4rem; margin: 0 0 4px 0; font-weight: 600; letter-spacing: 0.5px; }
              p.subtitle { font-size: 0.85rem; color: #aaa; margin: 0; text-transform: uppercase; letter-spacing: 1px; }
           </style>
        </head>
      </html>
      `)
});

app.get('/cdn/*', (c) => {
  c.header('Cache-Control', 'public, max-age=31536000, immutable')
return c.text('MEFW Debug: Edge CDNからアセットが正常に配信されました！利用可能です。')
});

export default app
