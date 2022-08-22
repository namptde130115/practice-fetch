import { Button, Form, Input, Select } from 'antd'
import { ModalCommon, UploadImage } from '../../../../components'
import clsx from 'clsx'
import { useForm } from 'antd/lib/form/Form'
import styles from './index.module.scss'
import { useState } from 'react'

interface IModalCreate {
  visible: boolean
  onFinish: () => void
  onCancel: () => void
  onOk: () => void
}
export const ModalCreate = ({ visible, onFinish, onCancel, onOk }: IModalCreate) => {
  const [form] = useForm()
  const [selectStatus, setSelectStatus] = useState('')
  const handleChangeSelect = (value: string) => {
    setSelectStatus(value)
  }
  return (
    <ModalCommon width="600px" title={'Add Car Brand'} visible={visible} onCancel={onCancel} onOk={onOk}>
      <div className={styles.form__container}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <div className={styles['controls__title']}>Brand Details</div>
          <div className={styles['upload__wraper']}>
            <UploadImage title="" titleInUpload="Brand Logo" hasBorder={false} />
          </div>
          <div className={styles['controls__title']}>Brand Details</div>
          <Form.Item label="Brand Name" name="brandName" className={styles['form__item--half']}>
            <Input placeholder="Input Content" />
          </Form.Item>
          <Form.Item label="Brand Status" name="status" className={styles['form__item--half']}>
            <Select
              placeholder="Input Content"
              bordered={false}
              style={{ width: 150 }}
              className={clsx(styles.select__wrapper, {
                [styles.select__wrapper__active]: selectStatus === 'active',
              })}
              defaultValue="active"
              onChange={handleChangeSelect}
            >
              <Select.Option value="active">
                <div className={clsx(styles['brandcarrow__status--select'], styles.select__wrapper__active)}>
                  <div className={styles.dot} />
                  <span>Active</span>
                </div>
              </Select.Option>
              <Select.Option value="inActive">
                <div className={styles['brandcarrow__status--select']}>
                  <div className={styles.dot} />
                  <span>Inactive</span>
                </div>
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Brand Description" name="desciption" className={styles['form__item--full']}>
            <Input.TextArea placeholder="Input Description" />
          </Form.Item>
          <div className={styles.btn__group}>
            <Button type="ghost" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Create Brand
            </Button>
          </div>
        </Form>
      </div>
    </ModalCommon>
  )
}
