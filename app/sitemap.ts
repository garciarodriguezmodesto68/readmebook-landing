import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://readmebook.com'
  const currentDate = new Date('2026-05-16') // O simplemente new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/free-books`,
      lastModified: currentDate,
    },
  ]
}