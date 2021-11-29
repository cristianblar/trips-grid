import React from 'react'
import styles from './styles.module.css'

export default function DaysBadge({ daysAmount }) {
  return <span className={styles.daysBadgeContainer}>{daysAmount} DAYS</span>
}
