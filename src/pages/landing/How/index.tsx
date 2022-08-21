import locationIcon from '../../../assets/images/locationIcon.png'
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
            <img src={locationIcon} alt="" />
          </div>
          <div className={styles.text}>
            <span>Find Car</span>
            <span>Our cars are located at prime areas where by there won’t be problem with transportation </span>
          </div>
        </div>

        <div className={styles.description__container}>
          <div className={styles.img__wrapper}>
            <img src={locationIcon} alt="" />
          </div>
          <div className={styles.text}>
            <span>Find Car</span>
            <span>Our cars are located at prime areas where by there won’t be problem with transportation </span>
          </div>
        </div>
      </div>
    </article>
  )
}
