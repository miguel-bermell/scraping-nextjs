export interface ScrapingResults { 
  id: number
  currentPrice: number
  desiredPrice: number
  image: string
  isAvailable: boolean
  name: string
  url: string
  quality?: string
  paymentImages?: string[]
}