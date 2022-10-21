import { Route, Routes } from 'react-router-dom'

import { History, Home } from './pages'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default Router
