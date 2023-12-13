import BreadCrumb from '@/components/BreadCrumb'
import Clientitems from '@/components/Clientitems'
import Features from '@/components/Features'
import React from 'react'

import Faqs from '@/components/Faqs';
import ReviewsItems from '@/components/ReviewsItems';

export const metadata = {
  title: 'Assignment Help Saudia',
  description: '',
  openGraph: {
    title: 'Assignment Help Saudia',
    description: '',
  },
  metadataBase: new URL('https://assignmenthelpsaudia.com'),
  alternates: {
    canonical: '/reviews',
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
    <BreadCrumb title="Our Reviews" para="Early in the 20th century, the MBA became popular in the educational programs have been made creation of this degree.Early in the 20th century," />
    <Features />
    <div className='py-8 bg-navcolor'>
      <div className='container mx-auto'>
          <h4 className='text-[40px] text-white font-bold text-center'>What our clients say</h4>
          <p className='text-center text-white text-[16px] font-normal'>Early in the 20th century, the MBA became popular in the educational field. More than 2500 MBA programs have been made creation </p>
      </div>
      <div className='container mx-auto'>
        <ReviewsItems />
        <ReviewsItems />
        <ReviewsItems />
      </div>
    </div>

    <Faqs />

    </>
  )
}

export default page