'use client';

import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Search for the cars you love and go crazy.
            </h1>
            <p className='hero__subtitle'>
                Your car rental experience with out effortless booking process.
            </p>
            <CustomButton 
            title = "Explore Cars"
            containerStyles = "bg-primary-blue text-white rounded-full mt-10"
            handleClick = {handleScroll}
            />
        </div>
    </div>
  )
}

export default Hero