import { MainLayout } from './components/MainLayout'
import { Route, Routes } from 'react-router'

export const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>} />
      </Route>
    </Routes>
  )
}
