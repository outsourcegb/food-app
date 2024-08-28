import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import UserPropfilePage from './pages/UserPropfilePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout showHero={true}>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/auth-callback' element={<AuthCallbackPage />} />
      <Route
        path='/user-profile'
        element={
          <Layout>
            <UserPropfilePage />
          </Layout>
        }
      />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
