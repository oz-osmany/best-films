import React from 'react';
import { Button } from './ui/button';
import { Plus, Ticket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
interface Props {
  plus: boolean;
}

const BookNow = ({ plus }: Props) => {
      const { t, i18n } = useTranslation("home");
  
  return (
    <div className="flex">
      <Button className="btn__booking h-[48px] px-[20px] w-full max-w-[1000px] bg-yellow-400 text-black  font-semibold rounded">
        <Ticket /> {t("book")}
      </Button>
      {plus && (
        <Button className="h-[48px] ml-2 btn">
          <Plus />
        </Button>
      )}
    </div>
  );
};

export default BookNow;
