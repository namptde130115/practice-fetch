import { Button } from 'antd'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import img from '../../../../assets/images/logoEdit.png'
import { IBrand } from '../../../../models'
import { Status } from '../../../../components'

const mockBrandDetail: IBrand = {
  id: '1',
  brandName: 'Toyota',
  description: 'Jeep Grand Cherokee',
  numOfModel: 1200,
  lastUpdated: '25/12/2022',
  status: 'active',
  logoImageUrl: img,
}

export const ViewDetailBrand = () => {
  const navigate = useNavigate()

  const handleNavigateEdit = () => {
    navigate('/admin/edit-brand')
  }

  return (
    <div className={styles.container}>
      <header className={styles['controls__title']}>Brand Logo</header>
      <div className={clsx(styles['item__full'], styles[''])}>
        <img src={mockBrandDetail.logoImageUrl} alt="logo" />
      </div>
      <header className={styles['controls__title']}>Brand Details</header>
      <div className={clsx(styles['item__half'], styles['item'])}>
        <span>Brand Name</span>
        <span>{mockBrandDetail.brandName}</span>
      </div>
      <div className={clsx(styles['item__half'], styles['item'])}>
        <span>Brand Status</span>
        <Status
          className={clsx(styles.status__wrapper, { [styles.status__active]: mockBrandDetail.status === 'active' })}
          status={mockBrandDetail.status}
        />
      </div>
      <div className={clsx(styles['item__full'], styles['item'])}>
        <span>Brand Description</span>
        <span>{mockBrandDetail.description}</span>
      </div>
      <div className={clsx(styles['btn__container'])}>
        <Button onClick={handleNavigateEdit} type="primary">
          Edit Information
        </Button>
      </div>
    </div>
  )
}
