import styles from './index.module.scss'
import carImg from '../../assets/images/bmwCar.png'
import bmwLogo from '../../assets/images/bmwLogo.png'
export const CardProduct = () => {
  return (
    <div className={styles.card__container}>
      <div className={styles.img__wrapper}>
        <img src={carImg} alt="car" />
      </div>
      <div className={styles.card__bottom}>
        <span>BMW X3</span>
        <div className={styles.price__wrapper}>
          <span>From</span>
          <span>$248,000</span>
          <span>$2,302/mo</span>
        </div>
        <div className={styles.description__wrapper}>
          <span>4 variants</span>
          <span>with COE</span>
        </div>
        <div className={styles.logo__wrapper}>
          <div className={styles.logo}>
            <img src={bmwLogo} alt="bmw" />
          </div>
          <span>Performance Motors</span>
        </div>
      </div>
    </div>
  )
}
