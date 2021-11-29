import React from 'react'
import ViewButton from '../../components/travel-card/ViewButton'
import CardContent from '../../components/travel-card/CardContent'
import TripPrice from '../../components/travel-card/TripPrice'
import DaysBadge from '../../components/travel-card/DaysBadge'
import Feedback from '../../components/travel-card/Feedback'
import styles from './styles.module.css'

export default function TravelCard({
  video,
  title,
  content,
  price,
  photoId,
  daysAmount,
  feedbackAmount,
  feedbackPoints
}) {
  const handleClick = () => {
    console.log(video)
    window.open(video, '_blank')
  }

  return (
    <article className={styles.mainContainer}>
      <DaysBadge daysAmount={daysAmount} />
      <div className={styles.contentContainer}>
        <figure className={styles.imageContainer}>
          <img
            className={styles.cardImage}
            alt={title}
            src={`https://cdn.viventura.info/img/480x360/${photoId}`}
          />
        </figure>
        <div className={styles.textContainer}>
          <div className={styles.feedback_price_container}>
            <Feedback
              feedbackAmount={feedbackAmount}
              feedbackPoints={feedbackPoints}
            />
            <TripPrice price={price} />
          </div>
          <CardContent title={title} content={content} />
          <ViewButton handleClick={handleClick} video={video} />
        </div>
      </div>
    </article>
  )
}
