import clsx from 'clsx'
import styles from './Button.module.scss'

export const Button = ({ className, children, isActive, isDisabled }) => {
  return (
    <button
      className={clsx(styles.button, isActive && styles.active, className)}
      type="button" disabled={isDisabled}
    >
      {children}
    </button>
  )
}
