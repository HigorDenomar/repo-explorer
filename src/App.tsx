import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from './layouts/base-layout';
import { Home } from './pages/home';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
