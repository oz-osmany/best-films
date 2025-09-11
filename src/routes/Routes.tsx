import ByTicket from '@/components/ByTicket';
import Layout from '@/components/Layout';
import LayoutBooking from '@/components/LayoutBooking';
import NotFound from '@/components/Nofound';
import { ScrollToTop } from '@/components/ScrolltoTop';
import Ticket from '@/components/Ticket';
import Booking from '@/pages/Booking';
import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import Persons from '@/pages/Persons';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: '/movies/:id', Component: Movies },
      { path: '/persons/:id', Component: Persons },
    ],
  },
  {
    path: '/booking',
    Component: LayoutBooking,
    children: [
      { path: 'seat/:id', Component: Booking },
      { path: 'ticket/:id', Component: Ticket },
      { path: 'by/:id', Component: ByTicket },
    ],
  },
  { path: '*', Component: NotFound },
]);
// return (
//   <>
//     <ScrollToTop />
//     <Routes>
//       <Route path="/"Component={<Layout />}>
//         <Route indexComponent={<Home />} />
//         <Route path="/movies/:id"Component={<Movies />} />
//         <Route path="/persons/:id"Component={<Persons />} />
//       </Route>
//       <Route path="/booking/"Component={<LayoutBooking />}>,
//         children:[
//           { path: 'seat/:id'Component:<Booking /> },
//           { path: 'ticket/:id'Component:<Booking /> }
//         ]
//         <Route path="/booking/seat/:id"Component={<Booking />} />
//         <Route path="/booking/ticket/:id"Component={<Ticket />} />
//       </Route>
//     </Routes>
//   </>
// );
