import clsx from 'clsx'
import { Outlet } from 'react-router'
import { Header } from '../Header'
import { Footer } from '../Footer'
import styles from './MainLayout.module.scss'

export const MainLayout = () => {
  return (
    <div className={clsx(styles.mainLayout, 'container')}>
      <Header />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
