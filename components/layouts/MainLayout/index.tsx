import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { NavBar } from '../../ui'
import styles from './styles.module.css'

type Props = {
  title?: string
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children, title = 'Scrapping App' }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="author" content="Miguel Bermell" />
        <meta name="description" content={`Producto ${ title }`} />
        <meta name="keywords" content={ `${title}, ítem` } />
      </Head>

      <NavBar />

      <main className={styles.children}>
        { children }
      </main>

    </>
  )
}