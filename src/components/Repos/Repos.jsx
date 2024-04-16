import React, { useEffect, useState } from 'react'

function Repos() {
  const [repo, setRepo] = useState({})
  
  useEffect(() => {
    fetch('https://tddah-be-39c5a52e8b65.herokuapp.com/api/v1/users/1/repos/3')
      .then(res => res.json())
      .then(data => setRepo(data.data.attributes))
      .catch(err => err)
  }, [])
  return (
    <section className='repo-card'>
      <article>Repository Owner: {repo.owner}</article>
      <article>Project: {repo.name}</article>
      <article>Testing Covered: {repo.covered_percent}</article>
      
    </section>
  )
}

export default Repos
