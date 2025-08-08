import { showing } from '@/api/movies';
import Carousels from './Carousels';
import { Button } from './ui/button';

const Now = () => {
  return (
    <div className="pt-[20px]">
      <h1 className="title mb-[5px]">Now showing</h1>
      <Carousels data={showing} />
      <div>
        <Button className="w-full h-[48px] mb-[50px] bg-[#bdabab42] lg:hidden">
          All films now schowing
        </Button>
      </div>
    </div>
  );
};

export default Now;
