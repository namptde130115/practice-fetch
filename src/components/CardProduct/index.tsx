import styles from './index.module.scss'
import { IProduct } from '../../models/Product'

interface ICardProductProps {
  product: Partial<IProduct>
}
export const CardProduct = ({ product }: ICardProductProps) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.img__wrapper}>
        <img src={product.imgUrl} alt="car" />
      </div>
      {product.totalPrice && (
        <div className={styles.card__bottom}>
          <span>{product.name}</span>
          <div className={styles.price__wrapper}>
            <span>From</span>
            <span>{`$${product.totalPrice}`}</span>
            <span>${product.pricePerMo}/mo</span>
          </div>
          <div className={styles.description__wrapper}>
            <span>{product.variant} variants</span>
            {product.coe && <span>with COE</span>}
          </div>
          <div className={styles.logo__wrapper}>
            <div className={styles.logo}>
              <img src={product.logoBrandUrl} alt="bmw" />
            </div>
            <span>{product.storeName}</span>
          </div>
        </div>
      )}
    </div>
  )
}
