import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
   <div className='h-full w-full flex flex-col justify-center items-center'>
<Image
src="/logo.svg"
alt="logo"
width={120}
height={120}
className='animate-pluse duration-700'
/>
   </div>
  )
}

export default Loading