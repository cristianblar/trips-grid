import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import styles from './styles.module.css'

export default function Feedback({ feedbackAmount, feedbackPoints }) {
  return (
    <div>
      {!!feedbackAmount && !!feedbackPoints && (
        <div className={styles.feedbackContainer}>
          <AiFillStar color='orange' />
          <span>
            {` ${feedbackPoints}`}{' '}
            <span className={styles.amountText}>({feedbackAmount})</span>
          </span>
        </div>
      )}
    </div>
  )
}
