"use client"

import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { Button } from './button';
import EmptyState from '../EmptyState';
import Link from 'next/link';
  

function Listing() {

  const {user} = useUser(); 
  const [userRoomList, setUserRoomList] = useState([]);

  return (
    <div>
        <div className='flex items-center justify-between -mt-12'>
          <h2 className='font-semibold text-xl'>Hello, {user?.fullName}</h2>
          <Link href={'/dashboard/create-new'}>
               <Button className="text-xs">+ Redesign Room</Button>
          </Link>
        </div>
       
        
        {userRoomList?.length==0?
        <EmptyState/>
        : 
        <div>
              {/*Listing*/}

        </div>}


    </div>
  )
}

export default Listing
