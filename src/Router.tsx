import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components'

import { History, Home } from './pages'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

export default Router
