import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
        </Route>
        {/* <Route path="*" element={} /> */}
      </Routes>
    </BrowserRouter>
  )
}
