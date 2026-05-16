export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = 'https://readmebook.com'

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2026-05-16</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/es</loc>
    <lastmod>2026-05-16</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/en</loc>
    <lastmod>2026-05-16</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>2026-05-16</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/free-books</loc>
    <lastmod>2026-05-16</lastmod>
  </url>
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}