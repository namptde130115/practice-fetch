import { Button } from 'antd'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import img from '../../../../assets/images/logoEdit.png'

export const ViewDetailBrand = () => {
  const navigate = useNavigate()

  const handleNavigateEdit = () => {
    navigate('/admin/edit-brand')
  }

  return (
    <div className={styles.container}>
      <header className={styles['controls__title']}>Brand Logo</header>
      <div className={clsx(styles['item__full'], styles[''])}>
        <img src={img} alt="logo" />
      </div>
      <header className={styles['controls__title']}>Brand Details</header>
      <div className={clsx(styles['item__half'], styles['item'])}>
        <span>Brand Name</span>
        <span>UCARS PTE LTD</span>
      </div>
      <div className={clsx(styles['item__half'], styles['item'])}>
        <span>Brand Status</span>
        <span>Active</span>
      </div>
      <div className={clsx(styles['item__full'], styles['item'])}>
        <span>Brand Description</span>
        <span>Ucars brand description</span>
      </div>
      <div className={clsx(styles['btn__container'])}>
        <Button onClick={handleNavigateEdit} type="primary">
          Edit Information
        </Button>
      </div>
    </div>
  )
}
