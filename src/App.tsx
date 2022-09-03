import React from 'react'
import { Route, Routes } from 'react-router-dom'

import DetailPage from '@pages/Detail'
import FindMatePage from '@pages/FindMate'
import HomePage from '@pages/Home'
import WritePage from '@pages/Write'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find" element={<FindMatePage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App
