import { Outlet } from 'react-router-dom'
import { HeaderCarBrand } from '../car-brand/Header'

export const DetailBrand = () => {
  return (
    <div>
      <header>
        <HeaderCarBrand title="Brand Details" />
      </header>
      <Outlet />
    </div>
  )
}
