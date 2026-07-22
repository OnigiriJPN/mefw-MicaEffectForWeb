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
              .stat-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.95rem; }
           </style>
        </head>
        <body>
           <div class="window">
              <h1>🌐 MEFW</h1>
              <p class="subtitle">Mica Effect For Web / EdgeCDN</p>

              <div class="mica">
                <div class="start-row><strong>キャッチコピー:</strong> <span>ウェブの中でもマイカ効果をお試しあれ！</span></div>
                <div class="start-row><strong>System Status:</strong> <span style="color: #4cd137;">Operational</span></div>
                <div class="start-row><strong>Architecture:</strong> <span>Vercel Edge × Hono (v4.12.31)</span></div>
              </div>
            </div>
          </body>
      </html>
      `)
});

app.get('/cdn/*', (c) => {
  c.header('Cache-Control', 'public, max-age=31536000, immutable')
return c.text('MEFW Debug: Edge CDNからアセットが正常に配信されました！利用可能です。')
});

export default app
