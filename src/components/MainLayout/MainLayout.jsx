import { Outlet } from 'react-router'
import { Header } from '../Header'
import { Footer } from '../Footer'
import styles from './MainLayout.module.scss'

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
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
