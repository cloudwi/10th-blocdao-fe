import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import DetailPage from '@pages/Detail'
import FindMatePage from '@pages/FindMate'
import HomePage from '@pages/Home'
import SignUpPage from '@pages/SignUp'
import WritePage from '@pages/Write'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find" element={<FindMatePage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/signUp/:stepId" element={<SignUpPage />} />
        <Route path="/signUp" element={<Navigate to={'/signUp/1'} />} />
      </Routes>
    </div>
  )
}

export default App
