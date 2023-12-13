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
    canonical: '/pricing',
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
  return (
    <>
     <BreadCrumb title="Pricing & plan" para="Early in the 20th century, the MBA became popular in the educational programs have been made creation of this degree.Early in the 20th century," />
     <PricingBox />
     <Faqs />
    </>
  )
}

export default page