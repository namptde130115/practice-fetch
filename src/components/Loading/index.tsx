import { Spin, SpinProps } from 'antd'
import clsx from 'clsx'
import styles from './index.module.scss'

interface IProps extends SpinProps {
  isLoading: boolean
  className?: string
}
export const Loading = ({ isLoading, className, ...props }: IProps) => {
  return (
    <>
      {isLoading && (
        <div className={styles.loading__wrap}>
          <Spin {...props} className={clsx(styles.loading, className)} />
        </div>
      )}
    </>
  )
}
