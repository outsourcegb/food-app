import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/user-profile' element={<>User profile page</>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
