import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-3xl font-bold'>App</h1>
      <ul>
        <li>One</li>
        <li>ތާނަ</li>
      </ul>
      <p className='font-thaana'>މި ޕެރެގްރާފްގައި ލިޔެފައިމިވަނީ ތާނައިންނެވެ.</p>
    </div>
  )
}

export default App