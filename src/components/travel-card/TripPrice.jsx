import React from 'react'
import styles from './styles.module.css'

export default function TripPrice({ price }) {
  return (
    <div>
      <span className={styles.priceSpan}>
        From USD {Number(Number(price).toFixed(0)).toLocaleString()}
      </span>
    </div>
  )
}
