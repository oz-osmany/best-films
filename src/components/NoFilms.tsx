import React from 'react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

const NoFilms = () => {
    const { t} = useTranslation("movie");
  
  return (
    <div className="flex justify-center mb-[80px] mt-[85px] px-16">
      <div className="flex flex-col items-center">
        <div className="my-8">
          <img src="../assets/icons8-boleto-50.png" className="w-[120px]" alt="" />
        </div>
        <div>
          <h3>{t("screen")}</h3>
        </div>
        <div className="py-4">
          <p>
            {t("noscreen")}
          </p>
        </div>
        <div className="w-full">
          <Button className="btn h-[50px] w-full"> {t("view")}</Button>
        </div>
      </div>
    </div>
  );
};

export default NoFilms;
