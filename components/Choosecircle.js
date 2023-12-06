import React from 'react'
import dotcircle from '../public/assets/dotcircle.svg';
import barline from '../public/assets/barline.png';
import Image from 'next/image';

const Choosecircle = () => {
  return (
    <>
        <div className='flex flex-col gap-4 relative left-[68px] z-10'>
            <div className='relative top-[-3rem] left-[2.3rem]'>
                <Image src={dotcircle} />
            </div>
            <div className='relative top-[-3.4rem] left-[-1.3rem]'>
                <Image src={dotcircle} />
            </div>
            <div className='relative top-[-1.4rem] left-[-3.3rem]'>
                <Image src={dotcircle} />
            </div>
            <div className='relative top-[1.4rem] left-[-3rem]'>
                <Image src={dotcircle} />
            </div>
            <div className='relative top-[3rem] left-[-0.5rem]'>
                <Image src={dotcircle} />
            </div>
            <div className='absolute z-[-1] left-[-2.8rem] top-[-1rem]'>
                <Image src={barline} style={{height:'auto',width:'auto'}} />
            </div>
        </div> 
    </>
  )
}

export default Choosecircle