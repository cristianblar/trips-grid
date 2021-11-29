import React from 'react'
import styles from './styles.module.css'

export default function CardContent({ title, content }) {
  return (
    <div className={styles.mainContentContainer}>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  )
}
