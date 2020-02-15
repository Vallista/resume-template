import React from 'react'

import styles from './style.module.scss'

const Area = ({ children, title }) => {
  return (
    <div className={styles.area}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.contents}>{children}</div>
    </div>
  )
}

export default Area
