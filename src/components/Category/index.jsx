import React from 'react'

import styles from './style.module.scss'

const Category = ({ title, contents }) => {
  const createSubContentsElements = (subContents) => (
    <section className={styles.contents}>
      {subContents.map((subContent, subIndex) => (
        <section key={subIndex}>
          <p className={styles.subDescription}>{subContent}</p>
        </section>
      ))}
    </section>
  )

  const createContentsElements = () => (
    <section className={styles.contents}>
      {contents.map((content, index) => (
        <section key={index}>
          <h3 className={styles.subTitle}>{content.subTitle}</h3>
          {createSubContentsElements(content.subContents)}
        </section>
      ))}
    </section>
  )

  return (
    <div className={styles.category}>
      <header>
        <h2 className={styles.title}>{title}</h2>
      </header>
      {createContentsElements()}
    </div>
  )
}

export default Category
