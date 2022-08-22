import clsx from 'clsx'
import styles from './index.module.scss'
interface IStatus {
  status: 'active' | 'inActive'
  className?: string
}
export const Status = ({ status, className }: IStatus) => {
  return (
    <div className={clsx(styles['brandcarrow__status'], { [styles.active__status]: status === 'active' }, className)}>
      <div className={styles.dot} />
      <span>{status === 'active' ? 'Active' : 'Inactive'}</span>
    </div>
  )
}
