import Layout from '@/components/Layout';
import { ScrollToTop } from '@/components/ScrolltoTop';
import Booking from '@/pages/Booking';
// import Cinema from '@/pages/Cinema';
// import Club from '@/pages/Club';
import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import Persons from '@/pages/Persons';
import { Route, Routes } from 'react-router';

const Routess = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="/persons/:id" element={<Persons />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routess;
