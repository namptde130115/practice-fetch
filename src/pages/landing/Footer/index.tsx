import { Button, Collapse, Input } from 'antd'
import CarbuyerLogo2 from '../../../assets/images/CarbuyerLogo2.png'
import { DownOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { FacebookIcon, LinkedinIcon, TelegramIcon, YoutubeIcon } from '../../../assets/icons'
import { IconWrap } from '../../../components'
import ucarMini from '../../../assets/images/ucarMini.png'
export const Footer = () => {
  const onChange = () => {
    console.log('onChange')
  }

  const genExtra = () => (
    <DownOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation()
      }}
    />
  )
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={CarbuyerLogo2} alt="" />
        </div>
        <div>
          <span>71 Ayer Rajah Crescent, #06-14, Singapore 139951</span>
          <span>+65 8808 7905</span>
          <span>hello@carbuyer.com.sg</span>
        </div>
        <Collapse onChange={onChange} ghost>
          <Collapse.Panel showArrow={false} header="About" key="1" extra={genExtra()}>
            <p>About</p>
          </Collapse.Panel>
          <Collapse.Panel showArrow={false} header="Services" key="2" extra={genExtra()}>
            <p>Services</p>
          </Collapse.Panel>
          <Collapse.Panel showArrow={false} header="Resources" key="3" extra={genExtra()}>
            <p>Resources</p>
          </Collapse.Panel>
          <Collapse.Panel showArrow={false} header="Legal" key="4" extra={genExtra()}>
            <p>Legal</p>
          </Collapse.Panel>
        </Collapse>
        <div className={styles.subscribe}>
          <span>
            Get the <strong>latest</strong> automotive news sent to your inbox!
          </span>
          <Input.Group compact>
            <Input style={{ width: 'calc(100% - 92px)' }} placeholder="Enter your email" />
            <Button type="primary" danger>
              Subscribe
            </Button>
          </Input.Group>
        </div>
        <div className={styles.social}>
          <span>Follow us</span>
          <IconWrap icon={<YoutubeIcon />} />
          <IconWrap icon={<FacebookIcon />} />
          <IconWrap icon={<TelegramIcon />} />
          <IconWrap icon={<LinkedinIcon />} />
          <IconWrap icon={<YoutubeIcon />} />
        </div>
        <div className={styles.ucar__description}>
          <div>
            <img src={ucarMini} alt="" />
          </div>
          <span>
            CarBuyer Pte Ltd and the CarBuyer Singapore brand <br /> are wholly owned by UCARS Pte Ltd
          </span>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>© 2022. All rights reserved.</span>
      </div>
    </>
  )
}
