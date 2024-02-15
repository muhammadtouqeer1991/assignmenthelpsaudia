import React from 'react'
import faqImg from '../public/assets/faqImg.webp';
import Image from 'next/image';

const Faqimg = () => {
  return (
    <>
        <div>
        <Image src={faqImg} style={{minWidth:'450px'}} alt="market" />
        </div>
    </>
  )
}

export default Faqimg