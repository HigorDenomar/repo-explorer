import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from './layouts/base-layout';
import { Home } from './pages/home';
import { UserPage } from './pages/user';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path='user/:username' element={<UserPage />} />
      </Route>
    </Routes>
  )
}
