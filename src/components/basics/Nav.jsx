import React from 'react'
import Link from 'next/link'
export default function Nav() {
  return (
    <nav className='bg-purple-700 w-full select-none h-16 flex justify-between items-center px-5'>
        <div>
            <Link href={"/"} className='text-2xl font-bold text-white'>Purchase management System</Link>
        </div>
        
    </nav>
  )
}
