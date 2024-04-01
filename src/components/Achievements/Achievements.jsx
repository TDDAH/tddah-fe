import React, { useEffect } from 'react'

function Achievements() {

  useEffect(() => {
    fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/users/1/repos/3')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])


  return (
    <div>
     Repos and Achievements here
    </div>
  )
}

export default Achievements
