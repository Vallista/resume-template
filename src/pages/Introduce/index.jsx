import React from 'react'

import Area from '../../components/Area'
import Category from '../../components/Category'

import styles from './style.module.scss'

import { Interest as db } from '../../DB'

const Introduce = () => {
  return (
    <Area title={db.title}>
      {db.contents.map((category, index) => (
        <Category title={category.title} contents={category.contents} key={index} />
      ))}
    </Area>
  )
}

export default Introduce
