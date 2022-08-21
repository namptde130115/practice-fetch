import { Select } from 'antd'
import { SelectProps } from 'antd'
import clsx from 'clsx'
import styles from './index.module.scss'

// interface Iprops extends InputProps,

export const SelectCommon = ({ ...props }: SelectProps) => {
  return (
    <div className={clsx(styles.select)}>
      <Select autoFocus={true} className={clsx(styles.select)} {...props} />
    </div>
  )
}
