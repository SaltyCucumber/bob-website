import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Build, Donate, Home } from './components';
import { routes } from './constants';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.homepage} element={<Home />} />
      <Route path={routes.build} element={<Build />} />
      <Route path={routes.donate} element={<Donate />} />
      <Route path='*' element={<Navigate to={routes.homepage} replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
