import { Button, Form, Input, Select } from 'antd'
import clsx from 'clsx'
import { useState } from 'react'
import { UploadImage } from '../../../../components'
import styles from './index.module.scss'
import img from '../../../../assets/images/logoEdit.png'

export const EditDetailBrand = () => {
  const [selectStatus, setSelecStatus] = useState('active')
  const [form] = Form.useForm()

  const handleChangeSelect = (value: any) => {
    setSelecStatus(value)
  }

  const onFinish = (value: any) => {
    console.log(value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.form__container}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <div className={styles['controls__title']}>Brand Details</div>
          <div className={styles['upload__wraper']}>
            <UploadImage title="" titleInUpload="Brand Logo" hasBorder={false} url={img} />
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
                <div
                  className={clsx(styles['brandcarrow__status--select'], {
                    [styles.select__wrapper__active]: selectStatus === 'active',
                  })}
                >
                  <div className={styles.dot} />
                  <span>Active</span>
                </div>
              </Select.Option>
              <Select.Option value="inActive">
                <div className={styles['brandcarrow__status--select']}>
                  <div className={styles.dot} />
                  <span>InActive</span>
                </div>
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Brand Description" name="desciption" className={styles['form__item--full']}>
            <Input.TextArea placeholder="Input Description" />
          </Form.Item>
          <div className={styles.btn__group}>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
