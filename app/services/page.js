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

export const metadata = {
  title: 'Assignment Help Saudia',
  description: '',
  openGraph: {
    title: 'Assignment Help Saudia',
    description: '',
  },
  metadataBase: new URL('https://assignmenthelpsaudia.com'),
  alternates: {
    canonical: '/services',
    languages: {
      'en-US': '/',
      'de-DE': '/',
    },
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      // noimageindex: true,
      // 'max-video-preview': -1,
      // 'max-image-preview': 'large',
      // 'max-snippet': -1,
    },
  },
}

const page = () => {

  const FaqItems = [
    {
      title:"Can I hire you to edit my dissertation?",
      para:"Of course! We have PhD dissertation helpers and former professors of well-known universities, who can edit your dissertation in a professional way. They thoroughly proofread the whole content according to your university guidelines and make the correction which definitely improves your grade."
    },
    {
      title:"Can I hire you to edit my dissertation?",
      para:"Of course! We have PhD dissertation helpers and former professors of well-known universities, who can edit your dissertation in a professional way. They thoroughly proofread the whole content according to your university guidelines and make the correction which definitely improves your grade."
    },
    {
      title:"Can I hire you to edit my dissertation?",
      para:"Of course! We have PhD dissertation helpers and former professors of well-known universities, who can edit your dissertation in a professional way. They thoroughly proofread the whole content according to your university guidelines and make the correction which definitely improves your grade."
    },
    {
      title:"Can I hire you to edit my dissertation?",
      para:"Of course! We have PhD dissertation helpers and former professors of well-known universities, who can edit your dissertation in a professional way. They thoroughly proofread the whole content according to your university guidelines and make the correction which definitely improves your grade."
    }
  ];

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
      <Faqs FaqItems={FaqItems} />
      <Clientsays />
      <Process />
    </>
  )
}

export default page