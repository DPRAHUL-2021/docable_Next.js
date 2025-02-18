import React from 'react'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className='loader'>
        <Image
            src={"/assets/icons/loader.svg"}
            width={32}
            alt='Loader'
            height={32}
            className='animate-spin'
        />
        Loading...
    </div>
  )
}

export default Loader