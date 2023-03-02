import { Route, Routes, BrowserRouter } from 'react-router-dom';

import GsapGround from './pages/GsapGround';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GsapGround />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
