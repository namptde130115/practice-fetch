import { Navigate } from './Navigate'
import { HeaderInfor } from './HeaderInfor'
import { Panel } from './Panel'
import { Filter } from './Filter'
import { CardProduct } from '../../components/CardProduct'
import styles from './index.module.scss'
import { Button } from 'antd'
import { How } from './How'
import { Feature } from './Feature'
import imgQuestion from '../../assets/images/question.png'
import { Description } from './Description'
export const Landing = () => {
  return (
    <div>
      <HeaderInfor />
      <Navigate />
      <Panel />
      <Filter className={styles.filter}/>
      <div className={styles.productlist__container}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <div className={styles.btn__wrapper}>
        <Button type="ghost" danger>
          View more new cars
        </Button>
      </div>
      <How />
      <Feature />
      <div className={styles.img__question}>
        <img src={imgQuestion} alt="" />
      </div>
      <Description />
    </div>
  )
}
