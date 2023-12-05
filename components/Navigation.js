import React from 'react'
import Navitems from './Navitems';

const Navigation = () => {
  return (
    <>
       <div className="NavSec bg-navcolor">
        <div className="container flex mx-auto items-center">
          <Navitems />
        </div>
       </div>
    </>
  )
}

export default Navigation