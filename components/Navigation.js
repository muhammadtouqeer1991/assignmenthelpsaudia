"use client"
import React, { useEffect, useState } from 'react'
import Navitems from './Navitems';


const Navigation = () => {

const [scroll, setScroll] = useState(false);
useEffect(() => {
window.addEventListener("scroll", () => {
setScroll(window.scrollY > 50);
});
}, []);
return (
<>
    <div className={`NavSec bg-navcolor ${scroll ? "active" : ""}`}>
    <div className="container flex mx-auto items-center justify-between md:px-0 px-5">
      <Navitems />
    </div>
    </div>
</>
)
}

export default Navigation