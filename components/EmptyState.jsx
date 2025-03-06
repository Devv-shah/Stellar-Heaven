import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
      <Image src={'/Dash_img.gif'} alt='EmptyState image' className='rounded-2xl'
       width={200} height={170}/>
       <h2 className='font-medium text-lg text-gray-500 mt-5'>Create New AI interior Design for your room</h2>
       <Link href={'/dashboard/create-new'}>
       <Button className="mt-3 text-xs">+ Redesign Your Room</Button>
       </Link>
    </div>
  )
}

export default EmptyState
