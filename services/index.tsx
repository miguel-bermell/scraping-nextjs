export const getScrapingProducts = async () => {
  const API_URL = 'http://localhost:5000/scraping/results'
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}