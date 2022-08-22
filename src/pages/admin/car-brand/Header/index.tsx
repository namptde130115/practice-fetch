import styles from './index.module.scss'

interface IHeaderCarBrand {
  title: string
  children?: React.ReactNode
}

export const HeaderCarBrand = ({ title, children }: IHeaderCarBrand) => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__title}>{title}</div>
      {children}
    </div>
  )
}
