import { hitCoda, Result } from '../utils'

export default async function ml(id: number, zone: number): Promise<Result> {
  const request = await fetch(`https://mlbb-api.isan.eu.org/find?id=${id}&zone=${zone}`)
  const data = await request.json()
  return {
    success: true,
    game: 'Mobile Legends: Bang Bang',
    id,
    server: zone,
    name: data.name
  }
}
