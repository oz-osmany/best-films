import Layout from '@/components/Layout';
// import Cinema from '@/pages/Cinema';
// import Club from '@/pages/Club';
// import Details from '@/pages/Details';
import Home from '@/pages/Home';
import { Route, Routes } from 'react-router';

const Routess = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/cinema" element={<Cinema />} />
          <Route path="/details" element={<Details />} />
          <Route path="/club" element={<Club />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default Routess;
