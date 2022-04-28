
import type { NextPage } from 'next'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Grid, Loading } from "@nextui-org/react"
import { MainLayout } from '../components/layouts'
import { CardComponent, GridComponent, SortBySelect } from '../components/scraping'
import { getScrapingProducts } from '../services'
import { ScrapingResults } from '../interfaces'
import { SORT_BY } from '../utils'


type SetItem = {
  setItems: Dispatch<SetStateAction<ScrapingResults[]>>
}

interface Notification {
  currentPrice: number
  name: string,
  image: string,
  url: string
}

const Scraping: NextPage = () => {

  const [items, setItems] = useState([] as ScrapingResults[])
  const [sortBy, setSortBy] = useState(SORT_BY.NAME)

  useEffect(() => {
    getItems({ setItems })

    Notification.requestPermission().then(console.log)

    const interval = setInterval(() => {
      getItems({ setItems })
    }, 600000)

    return () => clearInterval(interval)

  }, [])

  return (
    <MainLayout title="Scraping">
      <SortBySelect sortBy={sortBy} setSortBy={setSortBy} />
      <GridComponent>
      {
        items?.length
        ?
          items
            .sort((a, b) =>
              sortBy === SORT_BY.PRICE
                ? a.currentPrice - b.currentPrice
                : a.name.localeCompare(b.name)
            )
            .map((scrapingItem) => (
              <Grid xs={12} sm={4} xl={2} key={scrapingItem.id}>
                <CardComponent scrapingItem={scrapingItem} />
              </Grid>
            ))
        :
          <Loading />
      }
      </GridComponent>
    </MainLayout>
  )
}

const getItems = async ({ setItems }: SetItem) => {

  const items: ScrapingResults[] = await getScrapingProducts() || []
  
  if (!items.length) return
  
  setItems(items)


  const notifyItems: Notification[] = items.filter(item => item.isAvailable)

  if (notifyItems.length) {
    sendNotification(notifyItems)
  }
  
}

const sendNotification = (items: Notification[]) => {
  items.forEach(item => notification(item))
}

const notification = ( notify: Notification ) => {
  
  if ( Notification.permission !== 'granted' ) {
    Notification.requestPermission()
  }

  const notification = new Notification('¡Producto con el precio deseado!', {
    body: `${notify.name} - ${notify.currentPrice}€`,
    icon: notify.image
  })

  notification.onclick = () => window.open(notify.url)

}

export default Scraping
