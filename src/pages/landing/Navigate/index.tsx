import { Button } from 'antd'
import logo from '../../../assets/images/logo.png'
import logoBlack from '../../../assets/images/logoBlack.png'
import styles from './index.module.scss'
import { SearchOutlined } from '@ant-design/icons'

export const Navigate = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.menu}>
          <li>New Cars</li>
          <li>Used Cars</li> <li>Reviews</li> <li>News</li>
        </ul>
        <div>
          <Button className={styles.btn__login} color="#EE1B24" type="primary" danger>
            Login
          </Button>
        </div>
      </header>
      <div className={styles.logo__responsive}>
        <div>
          <img src={logoBlack} alt="" />
        </div>
        <SearchOutlined />
      </div>
    </>
  )
}
