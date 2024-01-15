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

  const FaqItems = [
    {
      title:"What are your service charges per assignment?",
      para:"Assignment Help Saudi Arabia is a fair and transparent service. We estimate your order price after considering all the elements and requirements of your order. Therefore, it is very difficult to tell the price of one assignment without knowing its specifics. However, rest assured that whatever price we calculate for your order will be very feasible and within your budget. "
    },
    {
      title:"Do you offer discounts?",
      para:"Although our real service rates are highly affordable and cheap themselves, we make them even more accessible for you by offering various discounts and markdowns throughout the year. From holiday sales to first order discounts and many others, we provide various kinds of promotional and discounted offers for you."
    },
    {
      title:"Can I trust your service that there will be no hidden charges? ",
      para:"Yes, you can certainly trust our service in this regard. We claim to be a genuine and credible help for students and strive to work by those principles. Our team will calculate your affordable order price at the commencement of the service, and this payment will be considered the final one that will not be changed throughout the service. "
    },
    {
      title:"Do you offer value for money?",
      para:"Our service is the best across Saudi Arabia due to various student-friendly reasons that help the educational objectives of the students. From hiring only qualified writers to meticulous attention to detail and service charges feasibility, we ensure that you get the best value for your money at every step with our service. "
    }
  ];

  return (
    <>
     <BreadCrumb title="Fly High in Your Academics With Our Affordable Assignment Writing Help" para="Ready to reach the stars? Let us be your partner in the journey of excellence. Hire us today at cheap rates and step forward for success. " />
     <PricingBox />
     <Faqs FaqItems={FaqItems} />
    </>
  )
}

export default page