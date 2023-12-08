import React from 'react'
import Ctainfo from './Ctainfo'
import Ctaimage from './Ctaimage'
import Ctaaction from './Ctaaction'

const Cta = () => {
  return (
    <>
        <div className='bg-topbarcolor py-8 md:py-0'>
            <div className='container mx-auto flex flex-col md:flex-row items-center'>
                <Ctainfo />
                <Ctaimage />
                <Ctaaction />
            </div>
        </div>
    </>
  )
}

export default Cta