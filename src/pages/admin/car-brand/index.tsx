import { BrandCarRow } from './BrandCarRow'
import { HeaderCarBrand } from './Header'

export const CardBrand = () => {
  return (
    <div>
      <header>
        <HeaderCarBrand title="CAR BRANDS LIST" />
      </header>
      <article>
        <BrandCarRow />
      </article>
    </div>
  )
}
