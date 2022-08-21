import { Modal } from 'antd'
import styles from './index.module.scss'
interface IProps {
  title: string
  visible: boolean
  onOk?: () => void
  onCancel?: () => void
  children: React.ReactNode
  width: string
  destroyOnClose?: boolean
}

export const ModalCommon = ({ title, visible, onOk, onCancel, children, width, destroyOnClose }: IProps) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      closable={true}
      maskClosable={false}
      className={styles.modal}
      width={width}
      destroyOnClose={destroyOnClose}
      footer={null}
    >
      {children}
    </Modal>
  )
}
