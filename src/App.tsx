import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '@pages/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
