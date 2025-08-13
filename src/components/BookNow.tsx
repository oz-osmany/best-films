import React from 'react'
import { Button } from './ui/button'
import { Plus, Ticket } from 'lucide-react'

const BookNow = () => {
  return (
    <div className="flex">
              <Button className="h-[50px] px-[20px] w-full max-w-[400px] bg-yellow-400 text-black  font-semibold rounded">
                <Ticket /> Book now
              </Button>
              <Button className="h-[50px] ml-2 btn">
                <Plus />
              </Button>
            </div>
  )
}

export default BookNow