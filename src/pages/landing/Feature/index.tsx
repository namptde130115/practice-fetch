import { Button } from 'antd'
import { CardFeature } from './CardFeature'
import styles from './index.module.scss'
import imgFeature from '../../../assets/images/feature.png'
import advertisement from '../../../assets/images/advertisement.png'
import { IFeature } from '../../../models'
const mockFeatureList: Partial<IFeature>[] = [
  {
    id: '1',
    featureName: 'The Palace',
    numOfSeat: 'Duplex',
    address: 'Lekki,phase 2',
    price: '2,000',
    imgUrl: imgFeature,
  },
  {
    id: '2',
    featureName: 'IVY RORY',
    numOfSeat: 'Duplex',
    address: 'Lekki,phase 2',
    price: '2,000',
    imgUrl: imgFeature,
  },
  {
    id: '5',
    imgUrl: advertisement,
  },
  {
    id: '3',
    featureName: 'The Palace',
    numOfSeat: 'Duplex',
    address: 'Lekki,phase 2',
    price: '2,000',
    imgUrl: imgFeature,
  },
  {
    id: '4',
    featureName: 'IVY RORY',
    numOfSeat: 'Duplex',
    address: 'Lekki,phase 2',
    price: '2,000',
    imgUrl: imgFeature,
  },
]
export const Feature = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div>
          <span>Our Featured Vehicles. </span>
          <span>One of our biggest product to be featured and that has sold out the most.</span>
        </div>
        <div className={styles.btn__wrapper}>
          <Button type="primary" danger>
            View More
          </Button>
        </div>
      </div>
      <div className={styles.feature__list}>
        {mockFeatureList.map((feature: Partial<IFeature>) => (
          <CardFeature key={feature.id} feature={feature} />
        ))}
      </div>
      <div className={styles.btn__responsive}>
        <Button type="primary" danger>
          View More
        </Button>
      </div>
    </div>
  )
}
