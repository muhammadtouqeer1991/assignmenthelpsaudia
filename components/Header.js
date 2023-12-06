import React from 'react'
import Headerinfo from './Headerinfo'
import Headerform from './Headerform'
import Headerimg from './Headerimg'

const Header = () => {
return (
<>
<div className="headerSec bg-topbarcolor relative z-0 overflow-hidden">
    <div className='flex container justify-between mx-auto py-7 pt-[3rem]'>
        <Headerinfo />
        <Headerform />
        <Headerimg />
    </div>
</div>
</>
)
}

export default Header