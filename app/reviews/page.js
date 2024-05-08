import BreadCrumb from '@/components/BreadCrumb'
import Clientitems from '@/components/Clientitems'
import Features from '@/components/Features'
import React from 'react'

import Faqs from '@/components/Faqs';
import ReviewsItems from '@/components/ReviewsItems';
import HighlyQualifiedWriters from '../../public/assets/HighlyQualifiedWriters.svg';

import Abdullah from '../../public/assets/Abdullah.webp';
import Hameed from '../../public/assets/Hameed.webp';
import Hessa from '../../public/assets/Hessa.webp';
import MuhammadKhalid from '../../public/assets/MuhammadKhalid.webp';
import MuhammadRashid from '../../public/assets/MuhammadRashid.webp';
import Sheikha from '../../public/assets/Sheikha.webp';


import Affordablerates from '../../public/assets/Affordablerates.svg';
import Diverseservice from '../../public/assets/Diverseservice.svg';
import Ontimehelp from '../../public/assets/Ontimehelp.svg';
import Qualifiedwriters from '../../public/assets/Qualifiedwriters.svg';

export const metadata = {
  title: 'Assignment Help Saudi Arabia Reviews: 1000+ Happy Students',
  description: '',
  openGraph: {
    title: 'Assignment Help Saudi Arabia Reviews: 1000+ Happy Students',
    description: '',
  },
  metadataBase: new URL('https://assignmenthelp.sa.com'),
  alternates: {
    canonical: '/reviews',
    languages: {
      'en-US': '/reviews',
      'de-DE': '/reviews',
    },
  },
  verification: { google: 'LZDMd3XEP7E_UMf5H3cD6EQ-fkNkup-fk96YDh9Z1Ac', },
  // robots: {
  //   index: false,
  //   follow: false,
  //   nocache: true,
  //   googleBot: {
  //     index: false,
  //     follow: false,
  //     // noimageindex: true,
  //     // 'max-video-preview': -1,
  //     // 'max-image-preview': 'large',
  //     // 'max-snippet': -1,
  //   },
  // },
}

const page = () => {

  const FeaturesContent = {
    heading:"Our Holistic Academic Support!",
    subheading:"Your Academic Mentor",
    option:[
      {
        icon:Qualifiedwriters,
        title:"Qualified writers",
      },
      {
        icon:Ontimehelp,
        title:"On time help",
      },
      {
        icon:Diverseservice,
        title:"Diverse service",
      },
      {
        icon:Affordablerates,
        title:"Affordable rates",
      },
    ]
  };

  const myReview = [
    {
      image:MuhammadRashid,
      name:"Muhammad Rashid",
      location:"Riyadh",
      para:"I have recently worked with Assignment Help Saudi Arabia, and the experience was truly worth my money and time. I got their assistance for my chemistry project, and they delivered it with perfection. From content quality to the extensive research they have done, all support facets were impressive. Thanks. ",
    },
    {
      image:Abdullah,
      name:"Abdullah",
      location:"Jeddah",
      para:"My instructor recently assigned me a physics assignment that consisted of long and complex numerical problems, so I got the help of Assignment Help Saudi Arabia to save some time and ensure accuracy. The service assisted me well and helped me solve all my numerical problems with efficient and expert support. Thank you. ",
    },
    {
      image:Sheikha,
      name:"Sheikha",
      location:"Riyadh",
      para:"Assignment Help Saudi Arabia proved to be really great for my geography subject assignment. It was perfectly structured and free from any grammatical errors. The writer they assigned was very efficient and offered me right on time support for every problem. Really appreciated. ",
    },
    {
      image:Hameed,
      name:"Hameed",
      location:"Jeddah",
      para:"My friend referred Assignment Help Saudi Arabia to me last week, and this really changed my whole study routine. Since I hired them, I have been getting immense help and convenience concerning my writing projects. Also, this service is affordable and offers quick service. ",
    },
    {
      image:Hessa,
      name:"Hessa",
      location:"Riyadh",
      para:"My case study assignment was developed by the skilled writer of Assignment Help Saudi Arabia and the result was just flawless. The structure was exactly according to my specifications, and the arguments were well-supported. I am thankful for the quality work they provided. ",
    },
    {
      image:MuhammadKhalid,
      name:"Muhammad Khalid",
      location:"Jeddah",
      para:"The experience I got from Assignment Help Saudi Arabia is just beyond impressive. They created an exceptional quality assignment for my business course. The research was extensive, and the gathered information was very well put together in the content. Thank you. ",
    },
  ];


  const FaqHeading = {
    heading:"Frequently Asked Questions",
    para:"Do you want to know more about our service? Get guidance from our FAQ section or chat with us directly. ",
  }

  const FaqItems = [
    {
      title:"Are the reviews about your service genuine? ",
      para:"Yes, Assignment Help Saudi Arabia believes in transparent and authentic service, and all our reviews are genuine and from verified clients. You can also find our service reviews on renowned review sites like TrustPilot, SiteJabber and others. We serve to satisfy our customer needs, and their positive experiences validate our efforts regarding this. "
    },
    {
      title:"Do you receive negative reviews, and how do you address that? ",
      para:"Assignment Help Saudi Arabia is dedicated to facilitating the students of KSA with all its resources and the best talent. Almost all of our customers receive exceptional service and showcase their satisfaction through their positive feedback. However, there are instances where we have received negative reviews as well. But we always take these reviews as a means for progress and strive to upgrade our service. "
    },
    {
      title:"Can I see a sample of your work before hiring you?",
      para:"Of course. We are a genuine service and ensure that our customers receive the same transparency and credibility from our work. We are aware that our work makes a significant impact on your studies and holds great importance for your educational performance. Hence, it is understandable to review our work sample before employing us. You can ask us for the sample anytime, and we will provide it.  "
    },
    {
      title:"Are the reviews about your service recent or old? ",
      para:"We are a professional service and understand the requirements for authenticity very well. To provide the viewers and potential clients with the most perfect and recent ideas about our service quality and customer satisfaction, we regularly post new reviews. All the reviews on our website are the recent ones reflecting the experiences of clients that we facilitated days or a week ago. "
    },
    
  ];
  
  return (
    <>
    <BreadCrumb title="Our Phenomenal Assignment Writing Help, as Told by the Students" para="Our assignment writing help service is creating a difference in the KSA students' academics remarkably, and it is validated by the positive reviews we receive frequently. " />
    <Features FeaturesContent={FeaturesContent} />
    <div className='py-8 bg-navcolor md:px-0 px-4'>
      <div className='container mx-auto'>
          <h2 className='md:text-[40px] text-[25px] text-white font-bold text-center'>Testimonials: Read Our Service Brilliance</h2>
          <p className='text-center text-white text-[16px] font-normal'>We give happy endings to your assignment writing projects, and you can witness that from our customer experiences as well. </p>
      </div>
      <div className='container mx-auto'>
        <ReviewsItems myReview={myReview} />
      </div>
    </div>

    <Faqs FaqItems={FaqItems} FaqHeading={FaqHeading} />

    </>
  )
}

export default page