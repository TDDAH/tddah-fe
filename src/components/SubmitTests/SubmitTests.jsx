import React from 'react'
import './SubmitTests.css'
import Form from '../Form/Form'
import Navbar from '../Navbar/Navbar'

function SubmitTests({ userId }) {
  return (
    <div>
      <Navbar />
      <Form userId={userId} />
    </div>
  )
}

export default SubmitTests
