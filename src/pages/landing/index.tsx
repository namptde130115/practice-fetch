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
import { Footer } from './Footer/index'
//model
import { IProduct } from '../../models'
//image
import carImg from '../../assets/images/bmwCar.png'
import bmwLogo from '../../assets/images/bmwLogo.png'
import alpine from '../../assets/images/alpine.png'
import alpineStore from '../../assets/images/alpineStore.png'
import advertisement from '../../assets/images/advertisement.png'

const listMockProduct: Array<Partial<IProduct>> = [
  {
    id: '1',
    coe: true,
    imgUrl: carImg,
    name: 'BMW',
    totalPrice: '248000',
    pricePerMo: '2300',
    variant: 4,
    storeName: 'Performance Motors',
    logoBrandUrl: bmwLogo,
  },
  {
    id: '2',
    coe: false,
    imgUrl: alpine,
    name: 'Alpine A110',
    totalPrice: '248000',
    pricePerMo: '2300',
    variant: 1,
    storeName: 'Wearnes Automotive  Motors',
    logoBrandUrl: alpineStore,
  },
  {
    id: '3',
    name: 'castrol',
    imgUrl: advertisement,
  },
  {
    id: '4',
    coe: true,
    imgUrl: carImg,
    name: 'BMW',
    totalPrice: '248000',
    pricePerMo: '2300',
    variant: 4,
    storeName: 'Performance Motors',
    logoBrandUrl: bmwLogo,
  },
]
export const Landing = () => {
  return (
    <div>
      <HeaderInfor />
      <Navigate />
      <Panel />
      <Filter className={styles.filter} />
      <div className={styles.productlist__container}>
        {listMockProduct.map((product: Partial<IProduct>) => (
          <CardProduct key={product.id} product={product} />
        ))}
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
      <Footer />
    </div>
  )
}
