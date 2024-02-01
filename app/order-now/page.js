import BreadCrumb from '@/components/BreadCrumb'
import Faqs from '@/components/Faqs'
import OrderForm from '@/components/OrderForm'
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

  const FaqHeading = {
    heading:"Frequently Asked Questions",
    para:"Do you have any concerns or queries about our assignment assistance in Saudi Arabia? Find answers in the FAQs section or contact us for more information. ",
  }

  const FaqItems = [
    {
      title:"Why should I hire your assignment writers in Saudi Arabia?",
      para:"Our writers are the leading in KSA, and customers prefer our experts because they offer genuine and efficient educational support. They create quality content with credible research material and standard academic writing conventions. These carefully made samples assist you in diverse learning and improve your academic performance. "
    },
    {
      title:"Is hiring your assignment writing service legal in Saudi Arabia? ",
      para:"Yes, hiring our academic expertise and support is totally legal. However, you, as a student, should avoid unethical use of our provided samples. For instance, you can not submit them as your own assignments or copy the content. It is important that you abide by the academic integrity rules and use our samples as a learning guide only. "
    },
    {
      title:"Does your service guarantee on time delivery of my assignment? ",
      para:"Yes, we promise to deliver your assignment at the exact time as agreed. Our writers are professional and understand the value of timely assignment submissions, hence, they work efficiently and develop your assignment in conformance with your deadline requirements. With our writers’ dedication, you always receive punctuality in deliveries. "
    },
    {
      title:"I want to have my assignment edited. Can your experts do that? ",
      para:"Absolutely, we are very thorough and inclusive in our service offerings. Our team is not only comprised of exceptional writers but also skilled editors. You can certainly send your assignment to us for editing, and we will offer the best service to elevate its quality. "
    },
    {
      title:"For what academic domains do you offer assignment writing help services? ",
      para:"Assignment Help Saudi Arabia is a holistic support system for the educational needs of Saudi students. Therefore, with our service, students of every academic field get enhanced convenience. Regardless of your academic discipline, we have a skilled assignment maker to aid you. "
    }
  ];


  return (
    <>
     <BreadCrumb title="Soar to Excellence With the Best Assignment Help Saudi Arabia" para="Reach your academic potential to the maximum possible limits with our competent and skilled assignment writers. Order now and team up with us for your educational success. " />
     <OrderForm />
     <Faqs FaqItems={FaqItems} FaqHeading={FaqHeading} />
    </>
  )
}

export default page