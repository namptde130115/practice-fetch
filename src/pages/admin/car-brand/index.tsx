import { BrandCarRow } from './BrandCarRow'
import { HeaderCarBrand } from './Header'
import { ModalCreate } from './ModalCreate'
import { Button, Input, Select } from 'antd'
import { DownOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { useState } from 'react'
import { IBrand } from '../../../models'
import bmwLogo from '../../../assets/images/logoBrand/bmw.png'
import toyotaLogo from '../../../assets/images/logoBrand/toyota.png'
import { useNavigate } from 'react-router-dom'
const mockListBrand: IBrand[] = [
  {
    id: '1',
    brandName: 'Bmw',
    description: 'Jeep Grand Cherokee',
    numOfModel: 1200,
    lastUpdated: '25/12/2022',
    status: 'active',
    logoImageUrl: bmwLogo,
  },
  {
    id: '2',
    brandName: 'Toyota',
    description: 'Jeep Grand Cherokee Jeep Grand CherokeeJeep Grand Cherokee',
    numOfModel: 800,
    lastUpdated: '25/12/2022',
    status: 'inActive',
    logoImageUrl: toyotaLogo,
  },
  {
    id: '3',
    brandName: 'Audi',
    description: 'Jeep Grand Cherokee',
    numOfModel: 1200,
    lastUpdated: '25/12/2022',
    status: 'active',
    logoImageUrl: bmwLogo,
  },
]
export const CardBrand = () => {
  const navigate = useNavigate()
  const [visibleModal, setVisibleModal] = useState(false)
  const [data, setData] = useState<IBrand[]>(mockListBrand)
  const handleCancelModal = () => {
    setVisibleModal(false)
  }

  const handleOnFinish = () => {
    setVisibleModal(false)
  }

  const handleOnOk = () => {
    setVisibleModal(false)
  }

  const handleOpenModal = () => {
    setVisibleModal(true)
  }

  const handleView = (brand: IBrand) => {
    console.log(brand)
    navigate('/admin/detail-brand')
  }

  const handleChange = (e: any) => {
    const searchData = mockListBrand.filter((item: IBrand) => {
      if (item.brandName.toLowerCase().includes(e.target.value)) {
        return item
      }
    })
    setData(searchData)
  }
  return (
    <div>
      <header>
        <HeaderCarBrand title="CAR BRANDS LIST">
          <div className={styles.control__container}>
            <Select suffixIcon={<DownOutlined />} defaultValue="viewAll" style={{ width: 180 }} bordered={false}>
              <Select.Option value="viewAll">View All</Select.Option>
              <Select.Option value="lastUpdated">Last Updated</Select.Option>
              <Select.Option value="Yiminghe">Brand Name</Select.Option>
              <Select.Option value="numberOfModels">Number of Models</Select.Option>
            </Select>
            <Input
              size="large"
              placeholder="Search car brand"
              prefix={<SearchOutlined />}
              className={styles.input__search}
              onChange={handleChange}
            />
            <Button icon={<PlusOutlined />} type="primary" onClick={handleOpenModal}>
              Add Brand
            </Button>
          </div>
        </HeaderCarBrand>
      </header>
      <article>
        {data.map((brand: IBrand) => (
          <BrandCarRow key={brand.id} brand={brand} handleViewDetail={(brand: IBrand) => handleView(brand)} />
        ))}
      </article>

      <ModalCreate onFinish={handleOnFinish} visible={visibleModal} onCancel={handleCancelModal} onOk={handleOnOk} />
    </div>
  )
}
