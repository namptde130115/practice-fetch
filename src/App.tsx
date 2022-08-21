import './App.less'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useStore } from './store'
import { Dashboard } from './layout/Dashboard'
import { CardBrand, DetailBrand, Landing } from './pages'
import { ViewDetailBrand } from './pages/admin/detail-brand/ViewDetailBrand'
import { EditDetailBrand } from './pages/admin/detail-brand/EditDetailBrand'

function App() {
  const [state] = useStore()
  const { isAuthenticated } = state
  useEffect(() => {
    // const token = localStorage.getItem('access_token')
    // if (token) {
    //   setIsAuthenticated(true)
    // }
  }, [isAuthenticated])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="admin" element={<Dashboard />}>
          <Route path="car-brand" element={<CardBrand />} />
          <Route path="" element={<DetailBrand />}>
            <Route path="detail-brand" element={<ViewDetailBrand />} />
            <Route path="edit-brand" element={<EditDetailBrand />} />
          </Route>
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
