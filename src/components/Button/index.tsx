import { Button } from 'antd'
import { ButtonProps } from 'antd'
import styles from './index.module.scss'

export const ButtonCommon = ({ ...props }: ButtonProps) => {
  return (
    <div className={styles.button__container}>
      <Button {...props} />
    </div>
  )
}
