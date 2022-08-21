import styles from './index.module.scss'
export const HeaderInfor = () => {
  return (
    <header className={styles.header}>
      <div>
        <span>
          71 Ayer Rajah Crescent, #06-14,
          <br /> Singapore 139951
        </span>
      </div>
      <div>
        <span>
          Email us at: <br /> hello@carbuyer.com.sg
        </span>
      </div>
      <div>
        <span>
          +65 8808 7905 <br /> +7 (700) 51 51 518
        </span>
      </div>
    </header>
  )
}
