import React from 'react';
import { Movie } from '../api/info';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Cards = ({ poster_url, title }: Movie) => {
  return (
    <div className="p-1">
      <Card className="w-[150px] h-[200px]">
        <CardHeader className="p-0">
          <img src={poster_url} alt="" className="rounded-[0.75rem] h-[200px]" />
        </CardHeader>
      </Card>
    </div>
  );
};

export default Cards;
