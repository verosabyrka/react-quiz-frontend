import styles from './MainLayout.module.scss'

export const MainLayout = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.mainLayout}>
      <header>header</header>
      <div className={styles.mainWrapper}>
        <main className={styles.main}>content</main>
        <footer className={styles.footer}>
          React Question Cards Application<br />
          © <time dateTime={currentYear.toString()}>{currentYear}</time> Built by&nbsp;
          <a href="https://github.com/verosabyrka" target="_blank" rel="noopener noreferrer">
            Sabyrka
          </a>.
        </footer>
      </div>
    </div>
  )
}
