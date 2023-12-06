import React from 'react'
import Featureinfo from './Featureinfo'
import Featureitems from './Featureitems'

const Features = () => {
  return (
    <>
        <div className='py-7 bg-topbarcolor'>
            <div className='container mx-auto flex items-center'>
                <Featureinfo />
                <Featureitems />
            </div>
        </div>
    </>
  )
}

export default Features