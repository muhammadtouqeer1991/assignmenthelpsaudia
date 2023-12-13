import Aboutwriters from '@/components/Aboutwriters'
import Backbonecontent from '@/components/Backbonecontent'
import Clientsays from '@/components/Clientsays'
import Cta from '@/components/Cta'
import Faqs from '@/components/Faqs'
import Features from '@/components/Features'
import Header from '@/components/Header'
import Ourwriters from '@/components/Ourwriters'
import Premiumservices from '@/components/Premiumservices'
import Process from '@/components/Process'
import Subject from '@/components/Subject'
import Whychoose from '@/components/Whychoose'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
      <Features />
      <Backbonecontent />
      <Whychoose />
      <Aboutwriters />
      <Subject />
      <Cta />
      <Ourwriters />
      <Faqs />
      <Clientsays />
      <Process />
    </>
  )
}

export default page