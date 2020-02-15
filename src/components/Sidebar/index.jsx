import React from 'react'

import styles from './style.module.scss'

import { Link } from 'react-router-dom'

import { Sidebar as db } from '../../DB'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profileWrapper}>
        <div className={styles.profileImageWrapper}>
          <img className={styles.profile} src={db.profile} alt='profile' />
        </div>
        <p className={styles.profileName}>{db.name}</p>
        <p className={styles.profileDescription}>{db.description}</p>
      </div>
      <div className={styles.contents}>
        {db.contents.map((data) => (
          <Link className={styles.link} to={data.path}>
            <span>{data.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
