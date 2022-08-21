import { Input } from 'antd'
import styles from './index.module.scss'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { PasswordProps } from 'antd/lib/input'
export const InputPasswordCommon = ({ ...props }: PasswordProps) => {
  return (
    <div>
      <Input.Password
        className={styles.input}
        {...props}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </div>
  )
}
