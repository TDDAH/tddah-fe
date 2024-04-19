import React, { useState, useEffect } from 'react'

function Achievements() {
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/achievements')
      .then(res => res.json())
      .then(data => {
        setAchievements(data.data)
  })
      .catch(err => console.log(err))
  })

  const achievCards = achievements.map((achiev, index) => {
    return (
      <section className='achievement-card' key={index}>
        <article>Achievement Name: {achiev.attributes.name}</article>
        <article>Criteria: {achiev.attributes.criteria}</article>
      </section>
    )
  }, [])



  return (
    <section className='achievements-section'>
      {achievCards}
    </section>
      
      
    
  )
}

export default Achievements
