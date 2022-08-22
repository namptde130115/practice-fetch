import locationIcon from '../../../assets/images/locationIcon.png'
import smartHouse from '../../../assets/images/smartHouse.png'
import secureData from '../../../assets/images/secureData.png'
import styles from './index.module.scss'

export const How = () => {
  return (
    <article className={styles.container}>
      <div className={styles.title__container}>
        <span>How it works. </span>
        <span>This is how our products works </span>
      </div>
      <div className={styles.list__container}>
        <div className={styles.description__container}>
          <div className={styles.img__wrapper}>
            <img src={locationIcon} alt="" />
          </div>
          <div className={styles.text}>
            <span>Find Car</span>
            <span>Our cars are located at prime areas where by there won’t be problem with transportation </span>
          </div>
        </div>

        <div className={styles.description__container}>
          <div className={styles.img__wrapper}>
            <img src={smartHouse} alt="" />
          </div>
          <div className={styles.text}>
            <span>Make payments </span>
            <span>Our estates comes with good network,portable water , 24hrs light and round the clock security.</span>
          </div>
        </div>

        <div className={styles.description__container}>
          <div className={styles.img__wrapper}>
            <img src={secureData} alt="" />
          </div>
          <div className={styles.text}>
            <span>Make it Official </span>
            <span>
              We have been in business for over 32 years,for client outside the country you can trust us to deliver
              well.
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
