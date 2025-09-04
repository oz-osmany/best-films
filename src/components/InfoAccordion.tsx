import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cinemas } from '@/api/cinemas';
import { days } from '@/api/days';

const InfoAccordion = () => {
  return (
    <div className="">
      <Accordion type="single" collapsible className="w-full bg-transparent">
        <AccordionItem value="item-1" className="my-2 rounded-xl border-none px-4 bg-[#31292942]">
          <AccordionTrigger>
            <div className="flex flex-col">
              <div className="text-[12px] text-gray-400">Cinema</div>
              <div>{cinemas[0].name}</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {cinemas.map((item) => {
              return (
                <ul key={item.id}>
                  <li>
                    <div>{item.name} </div>
                    <div>{item.city}</div>
                  </li>
                </ul>
              );
            })}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="my-2 rounded-xl border-none px-4 bg-[#31292942]">
          <AccordionTrigger>Date</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {days.splice(0, 5).map((item,index) => {
              return (
                <ul key={index}>
                  <li> {item} </li>
                </ul>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default InfoAccordion;
