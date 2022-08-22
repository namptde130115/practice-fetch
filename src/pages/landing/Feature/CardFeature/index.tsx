import styles from './index.module.scss'
import { IFeature } from '../../../../models'

interface ICardFeatureProps {
  feature: Partial<IFeature>
}
export const CardFeature = ({ feature }: ICardFeatureProps) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={feature.imgUrl} alt="" />
      </div>
      {feature.price && (
        <div className={styles.bottom}>
          <div className={styles.text__1}>
            <span>{feature.featureName}</span>
            <span>{feature.numOfSeat}</span>
          </div>
          <div className={styles.text__2}>
            <span>{feature.address}</span>
            <span>${feature.price}</span>
          </div>
        </div>
      )}
    </div>
  )
}
