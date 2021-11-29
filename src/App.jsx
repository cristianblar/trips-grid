import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './App.module.css'
import TravelCard from './containers/travel-card/TravelCard'
import Loading from './components/loading/Loading'

function App() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get('https://api-staging.venturatravel.org/trips/')
      .then(({ data: { data } }) => {
        setPlans(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [])

  if (loading) return <Loading />

  if (error) return <div>Error!</div>

  return (
    <section className={styles.mainAppContainer}>
      {!!plans.length &&
        plans.map(plan => (
          <TravelCard
            key={plan.id}
            title={plan.name}
            content={plan.emotional_headline}
            price={plan.composite_price?.price || plan.tailor_made_price}
            photoId={plan.photos[0].filename}
            daysAmount={plan.amount_of_days}
            feedbackAmount={plan.cached_amount_of_feedback}
            feedbackPoints={plan.cached_average_evaluation}
            video={plan.video_url}
          />
        ))}
    </section>
  )
}

export default App
