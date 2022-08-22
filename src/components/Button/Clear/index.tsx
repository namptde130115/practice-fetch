import { Button } from 'antd'
import styles from './index.module.scss'
export const ClearButton = () => {
  return (
    <Button type="link" className={styles.btn__link}>
      Reset
    </Button>
  )
}
