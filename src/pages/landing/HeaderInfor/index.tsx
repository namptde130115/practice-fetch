import { EmailIcon, LocationIcon, PhoneIcon } from '../../../assets/icons'
import { IconWrap } from '../../../components'
import styles from './index.module.scss'
export const HeaderInfor = () => {
  return (
    <header className={styles.header}>
      <div>
        <IconWrap icon={<LocationIcon />} />
        <span>
          71 Ayer Rajah Crescent, #06-14,
          <br /> Singapore 139951
        </span>
      </div>
      <div>
        <IconWrap icon={<EmailIcon />} />
        <span>
          Email us at: <br /> hello@carbuyer.com.sg
        </span>
      </div>
      <div>
        <IconWrap icon={<PhoneIcon />} />
        <span>
          +65 8808 7905 <br /> +7 (700) 51 51 518
        </span>
      </div>
    </header>
  )
}
