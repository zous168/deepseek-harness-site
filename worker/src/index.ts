import { INSTALLERS, type InstallerPlatform } from './installers.ts'

const PLATFORMS = new Set<InstallerPlatform>(['windows', 'macos', 'linux'])

export default {
  /**
   * Edge routes that must not live in static HTML: installer redirects and
   * the future resource-community API. Static marketing pages stay on Pages.
   */
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    const path = normalizePath(url.pathname)

    if (request.method === 'OPTIONS') return cors(new Response(null, { status: 204 }))

    if (path === '/api/health') {
      return json({ ok: true, service: 'deepseek-harness-site' })
    }

    if (path === '/api/installers') {
      return json(INSTALLERS)
    }

    const download = /^\/download\/(windows|macos|linux)$/.exec(path)
    if (download !== null) {
      const platform = download[1] as InstallerPlatform
      if (!PLATFORMS.has(platform)) return json({ error: 'unknown platform' }, 404)
      return cors(Response.redirect(INSTALLERS[platform], 302))
    }

    if (path === '/api/resources') {
      return json({
        items: [],
        notice: 'Editorial catalog is not open yet. Worker will serve it when the first verified entries land.',
      })
    }

    return json({ error: 'not found' }, 404)
  },
}

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

function json(body: unknown, status = 200): Response {
  return cors(new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  }))
}

function cors(response: Response): Response {
  const headers = new Headers(response.headers)
  headers.set('access-control-allow-origin', '*')
  headers.set('access-control-allow-methods', 'GET, OPTIONS')
  headers.set('access-control-allow-headers', 'content-type')
  return new Response(response.body, { status: response.status, headers })
}
