 import { showing } from '@/api/movies';
import BookNow from '@/components/BookNow';
import Footer from '@/components/Footer';
import Search from '@/components/Search';
import { Button } from '@/components/ui/button';
import { Filter, ListTodo, SlidersHorizontal, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

 const Movies = () => {
    const {id} = useParams();
    const days =["Tue 19 Aug","Tue 19 Aug","Tue 19 Aug","Tue 19 Aug","Tue 19 Aug","Tue 19 Aug","Tue 20 Aug","Tue 21 Aug"]
    const filterMovie = showing.find( item => item.id === id)
   return (
     <div className="relative z-0 h-[56%] md:h-[400px] lg:h-[580px] w-full">
        <div className='absolute right-0 w-full lg:w-[65%] h-full' style={{
            backgroundImage: `url(${filterMovie?.poster_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}></div>
        <div className='movie '>
          <div className='mb-4'> 
            <h1 className='title'>
              {filterMovie?.title}
            </h1> 
          </div>
          <div className='flex justify-between lg:justify-start w-full'>
            <button className='movie__btn lg:mr-2'>
              <ListTodo className='mr-2 w-[20px]'/><span className='text-[16px] lg:text-[16px] font-bold'> My watchlist</span>
            </button>
            <button className='movie__btn'>
              <ThumbsUp className='mr-2 w-[20px]'/><span className='text-[16px] lg:text-[16px] font-bold'>Rate</span>
            </button>
          </div>
          <div>
            <p>Informaciones como like</p>
          </div>
          <div>
            <p>Release day: {filterMovie?.release_day} </p>
            <p> {filterMovie?.description} </p>
            <p>Infos, trailers & details</p>
          </div>          
        </div>
        <div>
          {/* Search */}
          <div className='content'>
            <Search  />
          </div>
          <div className='block md:hidden'>
            <BookNow />
          </div>
          {/* Schedule */}
          <div className='content flex items-center w-[720px] gap-[12px] p-3 '>
            <div className='flex-w-[50px]'>
              <SlidersHorizontal  />
            </div>
            <div className='relative flex-1 overflow-x-auto no-scrollbar scroll-smooth h-[50px]'>
              <div className='flex flex-nowrap gap-[1px] items-center transition-transform duration-300 ease-out'>
                  {
                    days.map( item =>{
                      return (
                        <Button className='btn h-[40px] w-[120px] bg-gray-500 mr-3 px-3 shrink-0'> {item} </Button>
                      )
                    })
                  }
                </div>        
              </div>
            </div>
          </div>
          {/* Screen on this day */}
          <section className='relative block'>
            <div className='flex justify-center my-[80px] px-16'>
              <div className='flex flex-col items-center'>
                  <div className='my-8'>
                    <img src="../assets/icons8-boleto-50.png"  className='w-[120px]' alt="" />
                  </div>
                  <div><h3>No screening on this day</h3></div>
                  <div className='py-4'>
                    <p>
                       There are no screenings scheduled on this date. View the calendar to find performances for another day. 
                    </p>
                  </div>
                  <div className='w-full'>
                    <Button className='btn h-[50px] w-full'> View screenings on Wednesday 13 August</Button>
                  </div>
              </div>
            </div>
          </section>
          <section className="w-full h-auto">
          <Footer />
        </section>
     </div>
   )
 }
 
 export default Movies