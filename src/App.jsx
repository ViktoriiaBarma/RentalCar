import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import HomePage from './pages/HomePage/HomePage';
// import CatalogPage from './pages/CatalogPage/CatalogPage';
// import FavoritePage from './pages/FavoritePage/FavoritePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';


const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
