import React from 'react'
import Menu from './menu'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="relative flex justify-between px-6 sm:px-10 z-10 items-center">
        <div className="">
            <Link href={'/'} className='relative top-2'>
            <Image src="/images/logo/jr-logo-header.webp" alt="logo just ride" width={120} height={95} sizes='full' className='w-20 sm:w-24 md:w-28'/>
            </Link>
        </div>
        <div className="text-white p-2 lg:p-4">
            <Menu />
        </div>
      </nav>
  )
}
