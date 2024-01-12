import React from 'react'
import Clientitems from './Clientitems'

const Clientsays = ({ClientsaysContent}) => {
return (
<>
<div className='py-8 bg-navcolor'>
<div className='container mx-auto'>
  <h4 className='text-[40px] text-white font-bold text-center'>{ClientsaysContent == '' || ClientsaysContent == null || ClientsaysContent == undefined ? 'What our clients say' : ClientsaysContent.heading}</h4>
  <p className='text-center text-white text-[16px] font-normal'>{ClientsaysContent == '' || ClientsaysContent == null || ClientsaysContent == undefined ? 'Early in the 20th century, the MBA became popular in the educational field. More than 2500 MBA programs have been made creation ' : ClientsaysContent.para}</p>
</div>
<div className='container mx-auto'>
<Clientitems ClientsaysContent={ClientsaysContent} />
</div>
</div>
</>
)
}

export default Clientsays