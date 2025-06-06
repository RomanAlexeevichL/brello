import type { FC } from 'react'

import cn from 'clsx'

import { default as ImageLogo } from './logo.svg'
import styles from './styles.module.css'

interface Props {
  className?: string
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <img src={ImageLogo} alt="Logo" />
      <span className={styles.text}>Brello</span>
    </div>
  )
}
