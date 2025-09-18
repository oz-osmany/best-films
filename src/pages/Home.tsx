import Banner from '@/components/Banner';
import Now from '@/components/Now';
import Special from '@/components/Special';
import New from '@/components/New';
import Comming from '@/components/Comming';
import Footer from '../components/Footer';
import ReactModal from 'react-modal';
import Search from '@/components/Search';

ReactModal.setAppElement('#root');
const Home = () => {
  return (
    <div>
      <section className="banner relative z-0 h-[544px] md:h-[580px] xl:h-[780px] w-full">
        <div className="gradientbanner"></div>
        <Banner />
        <div className="separador"></div>
      </section>
      <div className="show__content show__content-fix md:bottom-[60px] ">
        {/* Search */}
        <Search />
        {/* Now showing */}
        <section className="w-full h-[420px] lg:h-[520px]">
          <Now />
        </section>
        {/* Special&Events */}
        <section className="w-full  h-[420px] lg:h-[520px]">
          <Special />
        </section>
        <section className="overflow-x-auto w-full h-[450px] md:h-[500px] lg:md:h-[620px] mb-8">
          <New />
        </section>
        {/* Comming soon */}
        <section className="w-full h-[420px]  lg:h-[520px]">
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
