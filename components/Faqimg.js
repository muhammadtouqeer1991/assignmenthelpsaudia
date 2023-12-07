import React from 'react'
import faqImg from '../public/assets/faqImg.png';
import Image from 'next/image';

const Faqimg = () => {
  return (
    <>
        <div>
        <Image src={faqImg} style={{minWidth:'450px'}} />
        </div>
    </>
  )
}

export default Faqimg