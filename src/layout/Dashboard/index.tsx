import { AppstoreOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import Logo from '../../assets/images/logo.png'
import { ButtonCommon, IconWrap } from '../../components'
import { CarIcon, SettingIcon } from '../../assets/icons'
import User from './UserInfor'
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items = [
  getItem('Car Brand', 'car-brand', <IconWrap size={16} icon={<CarIcon />} />),
  getItem('Folder', 'folder', <AppstoreOutlined />, [
    getItem('Menu Item', '1'),
    getItem('Menu Item', '2'),
    getItem('Menu Item', '3'),
  ]),
  getItem('Task', 'task', <MailOutlined />),
  getItem('Modules', 'modules', <MailOutlined />),
  getItem('Notification', 'notification', <MailOutlined />),
]
export const Dashboard = () => {
  const href = window.location.pathname.split('/')[2]
  const navigate = useNavigate()
  const [current, setCurrent] = useState(href)
  const [collapsed, setCollapsed] = useState(false)
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`${e.key}`)
    setCurrent(e.key)
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <div className={styles.dashboard__container}>
        <div className={styles.dashboard__menu}>
          <div className={styles.dashboard__logo__container}>
            <img src={Logo} alt="logo" />
            <ButtonCommon
              type="link"
              onClick={toggleCollapsed}
              className={styles.btn_toggle}
              style={{ marginBottom: 16 }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </ButtonCommon>
          </div>
          <Menu
            theme={'dark'}
            onClick={onClick}
            style={{ width: 240 }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
          <div className={styles.dashboard__bottom}>
            <div>
              <IconWrap icon={<SettingIcon />} />
              <span>Setting</span>
            </div>
          </div>
        </div>
        <div className={styles.dashboard__content}>
          <div className={styles.dashboard__content__header}>
            <User />
          </div>
          <div className={styles.dashboard__content__body}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
