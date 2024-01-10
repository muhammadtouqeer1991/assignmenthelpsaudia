import Backboneabout from '@/components/Backboneabout'
import Backbonecontent from '@/components/Backbonecontent'
import BreadCrumb from '@/components/BreadCrumb'
import Clientsays from '@/components/Clientsays'
import Cta from '@/components/Cta'
import Faqs from '@/components/Faqs'
import Features from '@/components/Features'
import Process from '@/components/Process'
import Link from 'next/link'
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
    canonical: '/about-us',
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
      <BreadCrumb title="About Us" para="Early in the 20th century, the MBA became popular in the educational programs have been made creation of this degree.Early in the 20th century," />
      <Features />
      <Backboneabout />
      <Cta />
      <Clientsays />
      <Faqs FaqItems={FaqItems} />
      <div className='py-5 bg-navcolor'>
        <div className="container mx-auto">
            <div className='flex justify-between items-center'>
            <div>
            Get Assignment Help Online From The Experts
            </div>
            <div>
                <div className='flex gap-4 pt-2 items-center justify-center'>
                    <Link href="#" className='py-3 px-8 bg-navactive rounded-[10px]'>Order Now</Link>
                    <Link href="#" className='py-3 px-8 border-2 border-navactive text-white rounded-[10px]'>Live Chat</Link>
                </div>
            </div>
            </div>
        </div>
      </div>
      <Process />
    </>
  )
}

export default page