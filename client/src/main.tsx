import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './global.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
