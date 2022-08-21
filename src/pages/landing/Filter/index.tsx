import clsx from 'clsx'
import styles from './index.module.scss'
interface IFilter {
  className?: string
}
export const Filter = ({ className }: IFilter) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div>
        <span>New/ Used</span>
      </div>
    </div>
  )
}
