import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import whatsappicon from '../public/assets/whatsappicon.webp';
import msgicon from '../public/assets/msgicon.webp';

const FixedButton = () => {
  return (
    <>
        <div className="fixedbtnwhatsapp">
        <ul className='list-unstyled m-0'>
        <li>
            <Link href="https://wa.me/+966557355156">
                <Image src={whatsappicon} className='img-fluid' alt='whatsapp' />
            </Link>
        </li>
        <li>
            <Link href="https://m.me/">
                <Image src={msgicon} className='img-fluid' alt='whatsapp' />
            </Link>
        </li>
        </ul>
        </div>
    </>
  )
}

export default FixedButton