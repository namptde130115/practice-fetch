import styles from './index.module.scss'
import { DatePicker, DatePickerProps } from 'antd'

export const DatePickerCommon = ({ ...props }: DatePickerProps) => {
  return (
    <div className={styles.picker__container}>
      <DatePicker {...props} />
    </div>
  )
}
