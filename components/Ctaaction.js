import Image from 'next/image'
import React from 'react'
import notgtp from '../public/assets/notgtp.png';
import turniting from '../public/assets/turniting.png';
import copyleak from '../public/assets/copyleak.png';
import paypal from '../public/assets/paypal.png';

const Ctaaction = () => {
  return (
    <>
        <div className='flex flex-wrap md:w-[500px] items-center gap-3'>
            <div>
                <Image src={notgtp} alt="market" />
            </div>
            <div>
                <Image src={turniting} alt="market" />
            </div>
            <div>
                <Image src={copyleak} alt="market" />
            </div>
            <div>
                <Image src={paypal} alt="market" />
            </div>
        </div>
    </>
  )
}

export default Ctaaction