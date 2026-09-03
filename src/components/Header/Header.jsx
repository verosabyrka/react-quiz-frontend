import { Link } from 'react-router'
import { Button } from '../Button'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.headerLogo} to="/">ReactQuiz</Link>
      <div className={styles.headerActions}>
        <Button>New card</Button>
        <Button>Log in</Button>
      </div>
    </header>
  )
}
