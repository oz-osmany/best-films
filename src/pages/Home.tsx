import Banner from '@/components/Banner';

import { ChevronDown, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Now from '@/components/Now';
import Special from '@/components/Special';
import New from '@/components/New';
import Comming from '@/components/Comming';
import Footer from '../components/Footer';

const Home = () => {
  const openModal = () => {
    alert('Prueba');
  };
  return (
    <div>
      <section className="banner relative h-[544px] md:h-[580px] xl:h-[780px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <Banner />
        <div className="separador"></div>
      </section>
      <div className="show__content show__content-fix md:bottom-[60px] ">
        {/* Search */}
        <div className="lg:w-[90%] lg:mx-auto">
          <div className="flex w-full h-[64px] rounded-sm border border-solid">
            <input
              type="text"
              name="search"
              placeholder="Look for a cinema"
              onClick={openModal}
              className="w-full pl-[54px] pr-[40px] py-2 bg-transparent"
            />
            <div className="flex mr-2 items-center justify-center h-[full] w-[40px] bg-transparent">
              <ChevronDown className="stroke-white" />
            </div>
            <div className="hidden lg:flex items-center">
              <Button className="px-4 h-[54px] btn mr-2">
                <MapPin /> Nearby
              </Button>
              <Button className="px-4 h-[54px] btn mr-2">
                <Heart /> My cinema
              </Button>
            </div>
            {/* <label htmlFor="" ><span>At?</span></label> */}
          </div>
        </div>
        {/* Now showing */}
        <section className="w-full h-[370px]">
          <Now />
        </section>
        {/* Special&Events */}
        <section className="w-full h-[370px]">
          <Special />
        </section>
        <section className="overflow-x-auto w-full h-[400px] md:h-[500px]">
          <New />
        </section>
        {/* Comming soon */}
        <section className="w-full h-[370px]">
          <Comming />
        </section>
        {/* Footer */}
        <section className="w-full h-auto">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
