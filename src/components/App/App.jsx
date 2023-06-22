import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from '../../components/Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatsPage = lazy(() => import('../../pages/CatsPage/CatsPage'));
const OneCatPage = lazy(() => import('../../pages/OneCatPage/OneCatPage'));
const HelpPage = lazy(() => import('../../pages/HelpPage/HelpPage'));
const InfoPage = lazy(() => import('../../pages/InfoPage/InfoPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    
    <BrowserRouter basename="/cat-shelter">
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="/cats/:catId" element={<OneCatPage />} />
            <Route path="/cats" element={<CatsPage />} />

            <Route path="/help-shelter" element={<HelpPage />} />

            <Route path="/info-shelter" element={<InfoPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
