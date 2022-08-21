import clsx from 'clsx'
import styles from './index.module.scss'

interface IProps {
  children?: React.ReactNode
  title?: string
  detail?: string
  backgroundImage: string
  height: string
}

export const PageHeader = ({ children, title, detail, backgroundImage, height }: IProps) => {
  return (
    <div className={styles.pageheader__wrap}>
      <div
        className={clsx(styles.pageheader__container, 'main-content')}
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: height }}
      >
        {title && (
          <div className={styles.title__container}>
            <span>{title}</span>
            <span>{detail}</span>
          </div>
        )}

        <div className={styles.controls__container}>{children}</div>
      </div>
    </div>
  )
}
