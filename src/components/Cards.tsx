import React from 'react';
import { Movie } from '../api/info';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';
import { Result } from '@/api/type';

const Cards = ({original_name, original_title,release_date, poster_path,id }: Result) => {
  console.log(poster_path)
  return (
    <div className="p-1">
      <Card className="w-[150px] xl:w-[200px] xl:h-[250px]">
        <CardHeader className="p-0">
          <Link to={`/movies/${id} `}>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="rounded-[0.75rem] w-full h-[200px] xl:h-[250px]" />
          </Link>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Cards;
