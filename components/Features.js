import React from 'react'
import Featureinfo from './Featureinfo'
import Featureitems from './Featureitems'

const Features = () => {
  return (
    <>
        <div className='py-7 bg-topbarcolor relative'>
            <div className='container mx-auto flex items-center md:flex-row flex-col'>
                <Featureinfo />
                <Featureitems />
            </div>
            <div className='absolute left-0 top-20'>
            <svg xmlns="http://www.w3.org/2000/svg" width="136" height="127" viewBox="0 0 136 127" fill="none">
<g opacity="0.5">
<path d="M97.8703 82.6734C86.435 101.069 62.2528 106.71 43.8583 95.2752C25.4639 83.8404 18.9128 58.199 30.3481 39.8037C41.7835 21.4083 69.6967 17.0443 88.0911 28.4791C106.486 39.9139 109.305 64.2789 97.8703 82.6734Z" fill="#282B2F"/>
<path d="M76.9284 55.2568C76.9284 55.2568 111.759 47.9429 114.196 51.433C116.635 54.9237 121.742 83.773 118.546 85.737C115.351 87.7009 84.5505 94.8871 82.9463 93.2305C81.3422 91.5739 74.5033 57.0403 76.9284 55.2568Z" fill="#28D07E"/>
<path d="M17.0333 65.505C23.198 69.3372 31.302 67.4464 35.1342 61.2818C38.9664 55.1171 37.0756 47.0131 30.911 43.1809C24.7464 39.3487 16.6423 41.2395 12.8101 47.4041C8.97791 53.5687 10.8687 61.6728 17.0333 65.505Z" stroke="#28D07E" stroke-width="16" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M45.8107 37.8849C45.977 37.1876 69.5712 21.9776 93.1911 47.0638" stroke="#343A40" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
</svg>
            </div>
        </div>
    </>
  )
}

export default Features