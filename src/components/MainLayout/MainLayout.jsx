import { Footer } from '../Footer'
import styles from './MainLayout.module.scss'

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <header>header</header>
      <div className={styles.mainWrapper}>
        <main className={styles.main}>content</main>
        <Footer />
      </div>
    </div>
  )
}
