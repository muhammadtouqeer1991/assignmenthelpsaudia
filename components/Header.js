import React from 'react'
import Headerinfo from './Headerinfo'
import Headerform from './Headerform'
import Headerimg from './Headerimg'

const Header = ({HeaderContent}) => {
return (
<>
<div className="headerSec bg-topbarcolor relative z-0 overflow-hidden">
    <div className='md:flex flex-col md:flex-row container justify-between mx-auto py-7 pt-[3rem]'>
        <Headerinfo HeaderContent={HeaderContent} />
        <Headerform HeaderContent={HeaderContent} />
        <Headerimg />
    </div>
    <div className='w-[800px] h-[800px] md:flex hidden rounded-full bg-navactive absolute top-[-6rem] right-[-13rem] z-[-2]'></div>
    <div className='absolute top-6 left-3'>
    <svg xmlns="http://www.w3.org/2000/svg" width="119" height="122" viewBox="0 0 119 122" fill="none">
<g opacity="0.5">
<path d="M103.689 54.2265C103.689 54.2265 36.2311 14.7179 32.1476 23.9632C28.0642 33.2086 38.0453 120.079 47.963 114.077C57.8807 108.076 113.232 62.0009 103.689 54.2265Z" fill="#282B2F"/>
<path d="M13.8254 48.3348C13.5732 46.539 55.6247 55.5377 60.5083 58.9399C65.3928 62.3415 31.2087 95.7418 30.7869 93.878C30.3659 92.0136 15.1033 57.4509 13.8254 48.3348Z" fill="#28D07E"/>
<path d="M68.9107 23.776C70.7488 23.9589 82.4487 32.7671 87.7737 36.8407C88.9969 37.7766 88.8166 39.667 87.4403 40.3596L71.354 48.4476C69.9911 49.1332 69.8003 51.0007 70.9961 51.9474L89.547 66.6363C90.7567 67.5944 90.5443 69.4878 89.1525 70.1547L74.0642 77.377C72.4521 78.1492 72.4931 80.4596 74.1331 81.1726L90.8487 95.3087" stroke="#343A40" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
</svg>
    </div>
    <div className='absolute left-0 top-[20rem]'>
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="141" viewBox="0 0 68 141" fill="none">
<g opacity="0.5">
<path d="M26.9047 100.916C14.6712 118.79 -9.73575 123.363 -27.6094 111.13C-45.4838 98.8961 -50.8998 72.9919 -38.6662 55.1174C-26.4327 37.243 1.64541 34.1111 19.5191 46.344C37.3921 58.5778 39.1382 83.0416 26.9047 100.916Z" fill="#282B2F"/>
<path d="M44.5521 57.0364C44.5521 57.0364 3.41193 60.8378 -1.60958 66.8008C-6.6311 72.7639 22.8606 82.418 49.617 73.7137C82.0061 63.1764 61.3655 54.4445 44.5521 57.0364Z" fill="#28D07E"/>
<path d="M35.7144 87.0189C35.7144 87.0189 13.6388 89.973 11.0659 93.2967C8.49277 96.619 25.1808 102.927 38.8105 95.8912C55.1255 87.4677 44.7142 85.2522 35.7144 87.0189Z" fill="#28D07E"/>
<path d="M-46.7475 92.6351C-31.9809 102.742 -11.8172 98.9638 -1.71065 84.1972C8.39586 69.4305 4.61807 49.2668 -10.1486 39.1603C-24.9153 29.0538 -45.079 32.8316 -55.1855 47.5983C-65.292 62.3649 -61.5142 82.5286 -46.7475 92.6351Z" stroke="#343A40" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
</svg>
    </div>
    <div className='absolute bottom-0 left-0'>
    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="101" viewBox="0 0 85 101" fill="none">
<g opacity="0.5">
<path d="M68.9268 15.0548C68.9268 15.0548 69.3758 85.1038 63.0898 87.3488C56.8038 89.5938 -6.95918 91.8388 -9.65417 87.3488C-12.3482 82.8588 -9.20519 15.5028 -5.61319 13.2578C-2.02019 11.0138 67.1308 10.5648 68.9268 15.0548Z" fill="#282B2F"/>
<path d="M84.6048 2.23477C84.6048 2.23477 84.8958 47.6128 80.8228 49.0668C76.7508 50.5208 35.4448 51.9758 33.6998 49.0668C31.9548 46.1578 33.9908 2.52577 36.3178 1.07077C38.6458 -0.383234 83.4408 -0.674235 84.6048 2.23477Z" fill="#28D07E"/>
<path d="M10.7668 71.4878C10.7668 71.4878 10.9348 97.6848 8.58383 98.5248C6.23283 99.3648 -17.6132 100.204 -18.6212 98.5248C-19.6292 96.8458 -18.4532 71.6558 -17.1102 70.8168C-15.7652 69.9758 10.0958 69.8078 10.7668 71.4878Z" stroke="#343A40" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
</svg>
    </div>
    
</div>
</>
)
}

export default Header