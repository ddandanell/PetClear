import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import App from './App.tsx'

// Build-time server render of one route. Uses React 19's static prerender API,
// which resolves Suspense / lazy() pages to completion (unlike renderToString).
export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
  let html = ''
  for await (const chunk of prelude as AsyncIterable<unknown>) {
    html += typeof chunk === 'string' ? chunk : String(chunk)
  }
  return html
}
