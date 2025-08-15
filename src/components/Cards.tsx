import React from 'react';
import { Movie } from '../api/info';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';

const Cards = ({ poster_url, title, id }: Movie) => {
  return (
    <div className="p-1">
      <Card className="w-[150px] h-[200px]">
        <CardHeader className="p-0">
          <Link to={`/movies/${id} `}>
            <img src={poster_url} alt="" className="rounded-[0.75rem] h-[200px]" />
          </Link>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Cards;
