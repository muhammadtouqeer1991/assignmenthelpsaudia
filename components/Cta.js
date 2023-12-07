import React from 'react'
import Ctainfo from './Ctainfo'
import Ctaimage from './Ctaimage'
import Ctaaction from './Ctaaction'

const Cta = () => {
  return (
    <>
        <div className='bg-topbarcolor'>
            <div className='container mx-auto flex items-center'>
                <Ctainfo />
                <Ctaimage />
                <Ctaaction />
            </div>
        </div>
    </>
  )
}

export default Cta