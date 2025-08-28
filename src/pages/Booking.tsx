
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useCinemaStore } from '@/store/cinemaStore';
import { cinemas } from '@/api/cinemas';
import { useParams } from 'react-router-dom';
import { UnionTypes } from '@/types/Information';
import { PelisId } from '@/api/api';
import { days } from '@/api/days';

const Booking = () => {
      const { id } = useParams();
      const { selectedCinema } = useCinemaStore();
        const [film, setFilm] = useState<UnionTypes>();
      useEffect(() => {
          const detailMovie = async () => {
            if (id) {
              const resp = await PelisId(parseInt(id));
              setFilm(resp);
              
            }
          };
          detailMovie();
        }, []);
    
  return (
    <div className='w-full h-screen'>
        <div className="relative z-0 h-[50%] md:h-[400px] lg:h-[580px] w-full overflow-hidden">
            <div
            className="absolute inset-0 w-full lg:w-[65%] h-full lg:h-[600px]"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${film?.poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className='banner__title flex-col'>
            <div>
                <h1> {film?.title} </h1>
            </div>
            <div>
                <h3> { selectedCinema?.name} </h3>
            </div>
          </div>
        </div>
        <Accordion
            type="single"
            collapsible
            className="w-full bg-transparent"
            defaultValue="item-1"
            >
            <AccordionItem value="item-1" className='my-2 rounded-xl border-none px-4 bg-[#31292942]'>
            <AccordionTrigger>
                <div className="flex flex-col">
                    <div className='text-[12px] text-gray-400'>
                        Cinema
                    </div>
                    <div>
                        { cinemas[0].name}
                    </div>
                </div>
            </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    {
                        cinemas.map(item =>{
                            return (
                                <ul>
                                    <li> 
                                        <div>{ item.name } </div>
                                        <div>{ item.city }</div>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='my-2 rounded-xl border-none px-4 bg-[#31292942]'>
                <AccordionTrigger>Date</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                {
                    days.splice(0,5).map(item =>{
                        return(
                            <ul>
                                <li> { item} </li>
                            </ul>
                        )
                    })                    
                }
                </AccordionContent>
            </AccordionItem>  
    </Accordion>
    
    </div>
  )
}

export default Booking