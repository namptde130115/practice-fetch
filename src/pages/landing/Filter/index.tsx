import clsx from 'clsx'
import styles from './index.module.scss'
import { DownOutlined } from '@ant-design/icons'
import { Button, Checkbox, Dropdown, Form, Menu, Radio } from 'antd'
import Input from 'antd/lib/input/Input'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'
import { ClearButton } from '../../../components'
import type { RadioChangeEvent } from 'antd'
import { useState } from 'react'

interface IFilter {
  className?: string
}

const menu2 = (
  <div className={styles.menu__range__price}>
    <span>Price Range</span>
    <div>
      <Form layout="vertical" className={styles.form__rangge__price}>
        <Form.Item label="Min" className={styles['form__item--half']}>
          <Input bordered={false} />
        </Form.Item>
        <span>-</span>
        <Form.Item label="Max" className={styles['form__item--half']}>
          <Input bordered={false} />
        </Form.Item>
      </Form>
      <div className={styles['form__btn--group']}>
        <ClearButton />
        <Button type="primary" danger>
          Save
        </Button>
      </div>
    </div>
  </div>
)
const options = [
  { label: 'Bus', value: 'Bus' },
  { label: 'Classic Car', value: 'Classic Car' },
  { label: 'Coupe', value: 'Coupe' },
  { label: 'Convertible', value: 'Convertible' },
  { label: 'Hatchback', value: 'Hatchback' },
  { label: 'Lorry', value: 'Lorry' },
  { label: 'MPV', value: 'MPV' },
  { label: 'Pickup', value: 'Pickup' },
  { label: 'Sedan', value: 'Sedan' },
  { label: 'Sport Car', value: 'Sport Car' },
  { label: 'SUV', value: 'SUV' },
  { label: 'Truck', value: 'Truck' },
  { label: 'Van (Passenger)', value: 'Van (Passenger)' },
  { label: 'Van (Goods)', value: 'Van (Goods)' },
  { label: 'Wagon', value: 'Wagon' },
]

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues)
}
const menu3 = (
  <div className={styles.menu__vehicletype}>
    <span>Vehicle Type</span>
    <Checkbox.Group className={styles.checkbox__group} options={options} defaultValue={['Apple']} onChange={onChange} />
    <div className={styles['form__btn--group']}>
      <ClearButton />
      <Button type="primary" danger>
        Save
      </Button>
    </div>
  </div>
)
export const Filter = ({ className }: IFilter) => {
  const [value, setValue] = useState(1)
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Radio.Group onChange={onChange} value={value} className={styles.menu__1}>
              <Radio value={1}>New Car ( Authorised Dealer)</Radio>
              <Radio value={2}>New Car ( Parallel Importer )</Radio>
              <Radio value={3}>Used Cars</Radio>
            </Radio.Group>
          ),
        },
      ]}
    />
  )
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.filter__container}>
        <div>
          <span>New/ Used</span>
          <Dropdown overlay={menu} trigger={['click']}>
            <div className={styles.item}>
              <span>New Cars</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
        <div>
          <span>Price Range</span>
          <Dropdown overlay={menu2} trigger={['click']}>
            <div className={styles.item}>
              <span>New Cars</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
        <div>
          <span>Vehicle Type</span>
          <Dropdown overlay={menu3} trigger={['click']}>
            <div className={styles.item}>
              <span>New Cars</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
        <Button type="primary" danger>
          Search
        </Button>
      </div>
    </div>
  )
}
