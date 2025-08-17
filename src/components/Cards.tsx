import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';
import { Result } from '@/api/type';

const Cards = ({ poster_path,original_title,title,id}: Result) => {
 
  return (
    <div className="p-1">
      <Card className="w-[150px] xl:w-[200px] xl:h-[250px]">
        <CardHeader className="p-0">
          <Link to={`/movies/${id} `}>
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="rounded-[0.75rem] w-full h-[200px] xl:h-[250px]" />
          </Link>
        </CardHeader>
      </Card>
      <div className='cards__name w-[150px] h-[42px] overflow-hidden'> {original_title || title} </div>

    </div>
  );
};

export default Cards;
