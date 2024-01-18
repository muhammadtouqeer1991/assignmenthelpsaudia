import BreadCrumb from '@/components/BreadCrumb'
import Faqs from '@/components/Faqs'
import PricingBox from '@/components/PricingBox'
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
    canonical: '/order-now',
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
     <BreadCrumb title="Soar to Excellence With the Best Assignment Help Saudi Arabia" para="Reach your academic potential to the maximum possible limits with our competent and skilled assignment writers. Order now and team up with us for your educational success. " />
    </>
  )
}

export default page