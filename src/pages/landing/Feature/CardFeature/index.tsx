import imgFeature from '../../../../assets/images/feature.png'
import styles from './index.module.scss'

export const CardFeature = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={imgFeature} alt="" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.text__1}>
          <span>The Palace</span>
          <span>The Duplex</span>
        </div>
        <div className={styles.text__2}>
          <span>Lekki,phase 2</span>
          <span>$2,000</span>
        </div>
      </div>
    </div>
  )
}
