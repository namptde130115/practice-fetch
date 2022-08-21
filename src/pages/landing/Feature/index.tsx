import { Button } from 'antd'
import { CardFeature } from './CardFeature'
import styles from './index.module.scss'
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
        <CardFeature />
        <CardFeature />
        <CardFeature />
        <CardFeature />
        <CardFeature />
      </div>
      <div className={styles.btn__responsive}>
        <Button type="primary" danger>
          View More
        </Button>
      </div>
    </div>
  )
}
