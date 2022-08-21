import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import React, { useState } from 'react'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import type { UploadChangeParam } from 'antd/es/upload'
import styles from './index.module.scss'
import clsx from 'clsx'

// eslint-disable-next-line no-unused-vars
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}
const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

interface IUploadImage {
  title: string
  titleInUpload: string
  hasBorder: boolean
  className?: string
  url?: string
}

export const UploadImage = ({ title, titleInUpload, hasBorder, className, url }: IUploadImage) => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>(url ? url : '')

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <div className={styles.uploadButton}>
      {title ? <span>{title}</span> : null}
      <div className={styles.uploadbutton__container}>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div>{titleInUpload}</div>
      </div>
    </div>
  )
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      accept="image/*"
      className={clsx(styles.upload__container, { [styles.border__right]: hasBorder }, className)}
    >
      {imageUrl ? (
        <div className={styles.img__container}>
          <span data-descr="CHANGE LOGO"></span>
          {title ? <span>{title}</span> : null}
          <img src={imageUrl} alt="avatar" />
        </div>
      ) : (
        uploadButton
      )}
    </Upload>
  )
}
