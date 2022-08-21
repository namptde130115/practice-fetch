import { Input } from 'antd'
import { InputProps } from 'antd'
import clsx from 'clsx'
import styles from './index.module.scss'

// interface Iprops extends InputProps,

export const InputCommon = ({ ...props }: InputProps) => {
  return (
    <div className={clsx(styles.input)}>
      <Input className={clsx(styles.input)} {...props} />
    </div>
  )
}
