import React from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

interface IProps {
  icon?: React.ReactNode
  size?: number
  className?: string
  onClick?: () => void
  color?: string
}

export const IconWrap: React.FC<IProps> = ({ icon, className, size, onClick, color }) => {
  return (
    <div
      className={clsx(className, 'icon__wrap', styles.icon__wrap)}
      style={{ fontSize: size, color: color }}
      onClick={onClick}
    >
      {icon}
    </div>
  )
}
