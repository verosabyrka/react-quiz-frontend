import styles from './Footer.module.scss'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      React Question Cards Application<br />
      © <time dateTime={currentYear.toString()}>{currentYear}</time> Built by&nbsp;
      <a href="https://github.com/verosabyrka" target="_blank" rel="noopener noreferrer">
        Sabyrka
      </a>.
    </footer>
  )
}
