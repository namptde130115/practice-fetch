import { FC } from 'react'
import { Avatar, Dropdown, Menu, Space } from 'antd'
import { CaretDownOutlined, UserOutlined, BellOutlined, InfoCircleOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
interface HeaderLayoutProps {
  size?: number
}

const User: FC<HeaderLayoutProps> = ({ size = 32 }) => {
  const navigate = useNavigate()
  const handleViewProfile = () => {
    navigate('/profile')
  }

  const handleLogOut = () => {
    localStorage.removeItem('access_token')
    navigate('/login')
  }
  const menu = (
    <Menu style={{ width: '90px' }}>
      <Menu.Item onClick={handleViewProfile}>Profile</Menu.Item>
      <Menu.Item onClick={handleLogOut}>Logout</Menu.Item>
    </Menu>
  )

  return (
    <div className={clsx(styles.header__user)}>
      <InfoCircleOutlined size={22} />
      <BellOutlined size={22} />
      <div>
        <Avatar size={size} icon={<UserOutlined />}></Avatar>
      </div>
      <div className={clsx(styles.header__user__name)}>Admin</div>
      <div className={clsx(styles.header__user__dropdown)}>
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <CaretDownOutlined className={styles.header__user__dropdown__icon} />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default User
