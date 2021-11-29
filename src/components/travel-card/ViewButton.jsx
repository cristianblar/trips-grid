import React from 'react'
import styles from './styles.module.css'

export default function ViewButton({ handleClick, video }) {
  return (
    <button
      className={styles.buttonContainer}
      type='button'
      disabled={!video}
      onClick={handleClick}
    >
      VIEW TRIP
    </button>
  )
}
