import { Button, Radio } from 'antd'
import styles from './index.module.scss'
import { IBrand } from '../../../../models'
import { Status } from '../../../../components'
import clsx from 'clsx'
interface IBrandCarRow {
  brand: IBrand
  // eslint-disable-next-line no-unused-vars
  handleViewDetail: (brand: IBrand) => void
}
export const BrandCarRow = ({ brand, handleViewDetail }: IBrandCarRow) => {
  return (
    <div className={styles.brandcarrow__container}>
      <Radio />
      <div className={clsx(styles.brandcarrow__img, { [styles.active__brand]: brand.status === 'active' })}>
        <img src={brand.logoImageUrl} alt="logo" />
      </div>
      <div className={styles.brandcarrow__quantity}>
        <span>{brand.brandName}</span>
        <div>
          <span>{brand.description}</span>
          <span>{brand.numOfModel} Models</span>
        </div>
      </div>
      <div className={styles['brandcarrow__date--update']}>
        <span>Last Update</span>
        <span>{brand.lastUpdated}</span>
      </div>
      <Status status={brand.status} />
      <Button onClick={() => handleViewDetail(brand)}>View Details</Button>
    </div>
  )
}
