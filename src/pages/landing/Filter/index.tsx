import clsx from 'clsx'
import styles from './index.module.scss'
import { DownOutlined } from '@ant-design/icons'
import { Button, Checkbox, Dropdown, Form, Menu } from 'antd'
import Input from 'antd/lib/input/Input'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'

interface IFilter {
  className?: string
}

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: <span>New Car ( Authorised Dealer)</span>,
      },
      {
        key: '2',
        label: <span>New Car ( Parallel Importer )</span>,
      },
      {
        key: '3',
        label: <span>Used Cars</span>,
      },
    ]}
  />
)

const menu2 = (
  <div className={styles.menu__range__price}>
    <span>Price Range</span>
    <div>
      <Form className={styles.form__rangge__price}>
        <Form.Item label="Min" className={styles['form__item--half']}>
          <Input bordered={false} />
        </Form.Item>
        <span>-</span>
        <Form.Item label="Max" className={styles['form__item--half']}>
          <Input bordered={false} />
        </Form.Item>
      </Form>
      <div>
        <Button className={styles.btn__reset}>Reset</Button>
        <Button type="primary" danger>
          Save
        </Button>
      </div>
    </div>
  </div>
)
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues)
}
const menu3 = (
  <div className={styles.menu__range__price}>
    <span>Price Range</span>
    <div>
      <Checkbox.Group options={options} defaultValue={['Apple']} onChange={onChange} />
      <div>
        <Button className={styles.btn__reset}>Reset</Button>
        <Button type="primary" danger>
          Save
        </Button>
      </div>
    </div>
  </div>
)
export const Filter = ({ className }: IFilter) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div>
        <div>
          <span>New/ Used</span>
          <Dropdown overlay={menu}>
            <div className={styles.item}>
              <span>New Cars</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
        <div>
          <span>Price Range</span>
          <Dropdown overlay={menu2}>
            <div className={styles.item}>
              <span>New Cars</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
        <div>
          <span>Vehicle Type</span>
          <Dropdown overlay={menu3}>
            <div className={styles.item}>
              <span>New Cars</span>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
      <div>{menu3}</div>
    </div>
  )
}
