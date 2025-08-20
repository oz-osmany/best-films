import Layout from '@/components/Layout';
import { ScrollToTop } from '@/components/ScrolltoTop';
// import Cinema from '@/pages/Cinema';
// import Club from '@/pages/Club';
import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import { Route, Routes } from 'react-router';

const Routess = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/cinema" element={<Cinema />} /> */}
          <Route path="/movies/:id" element={<Movies />} />
          {/* <Route path="/club" element={<Club />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default Routess;
