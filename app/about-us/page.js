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

import HighlyQualifiedWriters from '../../public/assets/HighlyQualifiedWriters.svg';

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

  

  const FeaturesContent = {
    heading:"Assignment Help Saudi Arabia",
    subheading:"Why We Are the Best for Your Academics?",
    option:[
      {
        icon:HighlyQualifiedWriters,
        title:"Field best writers",
      },
      {
        icon:HighlyQualifiedWriters,
        title:"Leaning rich assignments ",
      },
      {
        icon:HighlyQualifiedWriters,
        title:"Academic writing support",
      },
      {
        icon:HighlyQualifiedWriters,
        title:"Feedback for improvements ",
      },
    ]
  };
  

  const Backboneaboutdata = {
    heading:'Achieve Greatness in Your Studies - Consult Our Academic Experts',
    para:"Make leaps and bounds in your academics with comprehensive support from our skilled writers. ",
    para1:"Assignment Help Saudi Arabia strives to provide students with maximum ease and affordability in their educational endeavours. In this respect, we employ highly qualified writers from various educational disciplines. Our writers are not only academically experts but they are also professionally sound, exhibiting excellence in every academic task they undertake with a focus on enhanced customer facilitation. With increased conformance with your institute's writing standards and including your personalised style in your project development, our assignment helpers ensure your optimal academic success and learning. Our main goal is not only to provide convenience in developing your educational tasks but also to expand the horizons of your knowledge. We craft projects in a simplified and comprehensible manner with content that is a valuable combination of our writers’ knowledge and the latest research. This approach helps you learn your complex subjects effortlessly and without spending much time. For a dependable service that is sincere about your educational excellence, consider our assignment help today. ",
  }

  const CtaContent = {
    heading:"Smooth Your Pathway to Academic Success",
    subheading:"Get Our Experts on Board Today and Boost Your Learning Graph!",
    // treeheading:"We Guarantee Full Satisfaction",
  };

  const FaqHeading = {
    heading:"Frequently Asked Questions",
    para:"Do you have some concerns about our team or service? Read our FAQ section or contact us directly. ",
  }

  const FaqItems = [
    {
      title:"I want to hire your help, but would you let me select the writer of my choice? ",
      para:"At Assignment Help Saudi Arabia, we give precedence to your choices. We understand that the quality of your assignments depends directly on the qualifications and expertise of the assigned writer. Therefore, we provide you with the utmost peace of mind in this regard. With us, you can easily select the most relevant and reliable writer to suit your preferences."
    },
    {
      title:"Do you cater assignments with last-minute deadlines?",
      para:"We are highly familiar with your academic challenges and understand that deadlines can be really tight sometimes. Hence, we provide you with an optimal support system with our team that specialises in working on urgent orders. However, please keep in mind that we may have to charge a bit more due to the order's expedition. "
    },
    {
      title:"For what academic fields do you provide assistance for? ",
      para:"Assignment Help Saudi Arabia provides holistic support for your educational needs. We have various writers in our team who hold specialisation in different academic fields. This enables our assignment writing help to offer support for all kinds of assignments and disciplines. Regardless of your educational level or assignment subject, feel free to contact us. "
    },
    {
      title:"If I require a specific formatting style or data from selective research sources, do you accept that? ",
      para:"Definitely, you can send us. We welcome all kinds of contributions and materials from your end to create your assignments. Our service is dedicated to offering you satisfaction in all aspects of your assignment writing tasks. We are aware that by incorporating the materials you provided, we put you at ease. "
    }
  ];

  const ClientsaysContent = {
    heading:"Testimonials: Witness Our Service Dedication",
    para:"Students from Riyadh to Mecca trust our assignment writing expertise and you can witness that from their feedback. ",
    option:[
      {
        para:"It was really a very fruitful experience that I got by working with the laudable team of Assignment Help Saudi Arabia. They helped me effectively regarding my thesis and supported me with their worthy advice at every step. From abstract to conclusion, I found the service very satisfactory. I highly recommend them. "
      },
      {
        para:"It was surely a five star rating from my side for this team, as they are splendid in their professionalism. They created a matchless quality assignment for me on an urgent basis with accurate conformance with my requirements and the assignment brief. The service charges were also very feasible. Recommended! "
      }
    ]
  }

  return (
    <>
      <BreadCrumb title="Hire the Best Team of Writers and Complete Your Assignment Smartly" para="Want to polish your assignment writing skills? Employ Assignment Help Saudi Arabia and acquire assistance from adept writers and academic specialists for all your educational requirements." />
      <Features FeaturesContent={FeaturesContent} />
      <Backboneabout Backboneaboutdata={Backboneaboutdata} />
      <Cta CtaContent={CtaContent} />
      <Clientsays ClientsaysContent={ClientsaysContent} />
      <Faqs FaqItems={FaqItems} FaqHeading={FaqHeading} />
      <div className='py-5 bg-navcolor'>
        <div className="container mx-auto">
            <div className='flex justify-between items-center'>
            <div className='text-[25px] text-white m-0'>
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