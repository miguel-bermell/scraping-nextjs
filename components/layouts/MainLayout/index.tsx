import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { NavBar } from '../../ui'
import styles from './styles.module.css'

type Props = {
  title?: string
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children, title = 'Pokemon App' }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="author" content="Miguel Bermell" />
        <meta name="description" content={`Información sobre el pokémon ${ title }`} />
        <meta name="keywords" content={ `${title}, pokemon, pokedex` } />
      </Head>

      <NavBar />

      <main className={styles.children}>
        { children }
      </main>

    </>
  )
}