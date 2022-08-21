import { Button, Form, Input, Radio, Select } from 'antd'
import clsx from 'clsx'
import { useState } from 'react'
import { ModalCommon, UploadImage } from '../../../../components'
import styles from './index.module.scss'

export const BrandCarRow = () => {
  const [visible, setVisible] = useState(false)
  const [selectStatus, setSelecStatus] = useState('active')
  const [form] = Form.useForm()
  const onFinish = (value: any) => {
    console.log(value)
    onOk()
  }

  const onOk = () => {
    setVisible(false)
  }

  const handleChangeSelect = (value: any) => {
    setSelecStatus(value)
  }

  return (
    <div className={styles.brandcarrow__container}>
      <Radio />
      <div className={styles.brandcarrow__img}>
        <img src="" alt="" />
      </div>
      <div className={styles.brandcarrow__quantity}>
        <span>Toyota</span>
        <div>
          <span>Jeep Grand Cherokee</span>
          <span>1200 Models</span>
        </div>
      </div>
      <div className={styles['brandcarrow__date--update']}>
        <span>Last Update</span>
        <span>25/12/2022</span>
      </div>
      <div className={styles['brandcarrow__status']}>
        <div className={styles.dot} />
        <span>Active</span>
      </div>
      <Button onClick={() => setVisible(true)}>View Details</Button>
      <ModalCommon
        width="600px"
        title={'Add Car Brand'}
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={onOk}
      >
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
              <Button type="ghost" onClick={() => setVisible(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Create Brand
              </Button>
            </div>
          </Form>
        </div>
      </ModalCommon>
    </div>
  )
}
