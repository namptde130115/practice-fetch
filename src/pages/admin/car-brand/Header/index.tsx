import { Button, Input, Select } from 'antd'
import { DownOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

interface IHeaderCarBrand {
  title: string
  hasControls?: boolean
}

export const HeaderCarBrand = ({ title, hasControls }: IHeaderCarBrand) => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__title}>{title}</div>
      {hasControls && (
        <div className={styles.control__container}>
          <Select suffixIcon={<DownOutlined />} defaultValue="viewAll" style={{ width: 120 }} bordered={false}>
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
          />
          <Button icon={<PlusOutlined />} type="primary">
            Add Brand
          </Button>
        </div>
      )}
    </div>
  )
}
