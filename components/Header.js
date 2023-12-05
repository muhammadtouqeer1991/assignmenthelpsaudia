import React from 'react'
import Headerinfo from './Headerinfo'
import Headerform from './Headerform'
import Headerimg from './Headerimg'

const Header = () => {
return (
<>
<div className="headerSec">
    <div className='flex container justify-between mx-auto'>
        <Headerinfo />
        <Headerform />
        <Headerimg />
    </div>
</div>
</>
)
}

export default Header