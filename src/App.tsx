import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from './layouts/base-layout';
import { FavoritesPage } from './pages/favorites';
import { HomePage } from './pages/home';
import { UserPage } from './pages/user';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path='user/:username' element={<UserPage />} />
        <Route path='/favoritos' element={<FavoritesPage />} />
      </Route>
    </Routes>
  )
}
