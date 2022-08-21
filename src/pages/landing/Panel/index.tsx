import { Button } from 'antd'
import PanelImg from '../../../assets/images/panel.png'
import styles from './index.module.scss'
export const Panel = () => {
  return (
    <div className={styles.container}>
      <img src={PanelImg} alt="" />
      <div className={styles.description}>
        <span>Car Marketplace</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Nunc odio in et, lectus sit lorem id integer.
        </span>
        <Button type="primary" danger className={styles.btn__start}>
          Get Started
        </Button>
      </div>
    </div>
  )
}
