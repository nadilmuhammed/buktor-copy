import Image from 'next/image'
import React from 'react'

const DoctorsFooter = () => {
  return (
    <div className='py-2 border-t flex justify-center mt-20'>
        <Image
        src="/logo/buktor-logo.png"
        width={100}
        height={100}
        alt="Buktor Logo"
        className='w-[6%] object-cover'
        />
    </div>
  )
}

export default DoctorsFooter