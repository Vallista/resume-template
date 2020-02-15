import React from 'react'

import Area from '../../components/Area'
import Category from '../../components/Category'

import styles from './style.module.scss'

import { Career as db } from '../../DB'

const Career = () => {
  return (
    <Area title={db.title}>
      {db.contents.map((category, index) => (
        <Category title={category.title} contents={category.contents} key={index} />
      ))}
    </Area>
  )
}

export default Career
