import Layout from '@/components/Layout';
import LayoutBooking from '@/components/LayoutBooking';
import { ScrollToTop } from '@/components/ScrolltoTop';
import Ticket from '@/components/Ticket';
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
        </Route>
        <Route path="/booking/" element={<LayoutBooking />}>
          <Route path="/booking/seat/:id" element={<Booking />} />
          <Route path="/booking/ticket/:id" element={<Ticket />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routess;
