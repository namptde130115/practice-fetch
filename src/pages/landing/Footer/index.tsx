import { Button, Collapse, Input } from 'antd'
import CarbuyerLogo2 from '../../../assets/images/CarbuyerLogo2.png'
import { DownOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { FacebookIcon, InstaIcon, LinkedinIcon, TelegramIcon, YoutubeIcon } from '../../../assets/icons'
import { IconWrap } from '../../../components'
import ucarMini from '../../../assets/images/ucarMini.png'
import logo2 from '../../../assets/images/logo2.png'
import logo from '../../../assets/images/logo.png'

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
      <footer className={styles.footer__responsive}>
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
              <Input style={{ width: 'calc(100% - 100px)' }} placeholder="Enter your email" />
              <Button type="primary" danger>
                Subscribe
              </Button>
            </Input.Group>
          </div>
          <div className={styles.social}>
            <span>Follow us</span>
            <IconWrap icon={<InstaIcon />} />
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
      </footer>
      <footer className={styles.footer}>
        <div className={styles.contact}>
          <div className={styles['contact__address']}>
            <img className={styles.logo} src={logo2} alt="" />
            <address>
              <p className="address-desc">71 Ayer Rajah Cresent, #06-14, singapore139951</p>
              <p className="contact-phone">+65 8808 7905</p>
              <p className="contact-mail">hello@carbuyer.com.sg</p>
            </address>
          </div>

          <div className={styles['about__us']}>
            <h2 className="heading-about-us">about</h2>
            <a href="javacript:void(0)">about us</a>
            <a href="javacript:void(0)">contact us</a>
            <a href="javacript:void(0)">careers</a>
          </div>

          <div className={styles.services}>
            <h2 className="heading-about-us">services</h2>
            <a href="javacript:void(0)">buy used cars</a>
            <a href="javacript:void(0)">buy new cars</a>
            <a href="javacript:void(0)">be a dealer with UCARS</a>
          </div>

          <div className={styles.resuorces}>
            <h2 className="heading-about-us">resources</h2>
            <a href="javacript:void(0)">news</a>
            <a href="javacript:void(0)">sell my car</a>
            <a href="javacript:void(0)">COE prices</a>
          </div>

          <div className={styles.social}>
            <h3>
              Get the <span>lastest</span> automotive news sent to your inbox
            </h3>
            <Input.Group compact>
              <Input style={{ width: 'calc(100% - 100px)' }} placeholder="Enter your email" />
              <Button type="primary" danger>
                Subscribe
              </Button>
            </Input.Group>
            <div className={styles['social__icon']}>
              <span>Follow us</span>
              <IconWrap icon={<InstaIcon />} />
              <IconWrap icon={<FacebookIcon />} />
              <IconWrap icon={<TelegramIcon />} />
              <IconWrap icon={<LinkedinIcon />} />
              <IconWrap icon={<YoutubeIcon />} />
            </div>
          </div>
        </div>

        <div className={styles.advertise}>
          <div>
            <p>Advertising Terms and Conditions Platform Terms and Conditions Privacy Policy</p>
            <img className={styles.logo} src={logo} alt="" />
          </div>

          <div>
            <p>@ 2022.All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}
