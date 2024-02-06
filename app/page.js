import Image from 'next/image'
import Header from '@/components/Header'
import Features from '@/components/Features'
import Aboutwriters from '@/components/Aboutwriters'
import Whychoose from '@/components/Whychoose'
import Premiumservices from '@/components/Premiumservices'
import Cta from '@/components/Cta'
import Backbonecontent from '@/components/Backbonecontent'
import Subject from '@/components/Subject'
import Ourwriters from '@/components/Ourwriters'
import Faqs from '@/components/Faqs'
import Clientsays from '@/components/Clientsays'
import Process from '@/components/Process'
import CheapServicePackages from '../public/assets/CheapServicePackages.svg';
import CustomAssignments from '../public/assets/CustomAssignments.svg';
import FreeRevisions from '../public/assets/FreeRevisions.svg';
import HighlyQualifiedWriters from '../public/assets/HighlyQualifiedWriters.svg';

import Domainspecificwriterss from '../public/assets/Domainspecificwriterss.svg';
import Freeplagiarismreportss from '../public/assets/Freeplagiarismreportss.svg';
import Freerevisionss from '../public/assets/Freerevisionss.svg';
import Fullconfidentialits from '../public/assets/Fullconfidentialits.svg';
import Throughoutsupports from '../public/assets/Throughoutsupports.svg';

import CaseStudiess from '../public/assets/CaseStudiess.svg';
import Essayss from '../public/assets/Essayss.svg';
import LiteratureReviews from '../public/assets/LiteratureReviews.svg';
import Reportss from '../public/assets/Reportss.svg';
import Thesiss from '../public/assets/Thesiss.svg';
import Dissertations from '../public/assets/Dissertations.svg';

import AbdullahFahad from '../public/assets/AbdullahFahad.webp';
import AhmedSultan from '../public/assets/AhmedSultan.webp';
import FatimaNoor from '../public/assets/FatimaNoor.webp';
import HamzaSaleh from '../public/assets/HamzaSaleh.webp';
import MahaAmal from '../public/assets/MahaAmal.webp';

import AazraSheikh from '../public/assets/AazraSheikh.webp';
import Merajulhaq from '../public/assets/Merajulhaq.webp';

import PlaceOrder from '../public/assets/PlaceOrder.svg';
import Processing from '../public/assets/Processing.svg';
import ProvideInfo from '../public/assets/ProvideInfo.svg';
import QAandDelivery from '../public/assets/QAandDelivery.svg';

export const metadata = {
  title: 'Assignment Help Saudia',
  description: '',
  openGraph: {
    title: 'Assignment Help Saudia',
    description: '',
  },
  metadataBase: new URL('https://assignmenthelp.sa.com'),
  alternates: {
    canonical: '/',
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

export default function Home() {

  const HeaderContent = {
    heading:"Get Optimal Assignment Help With Our Assignment Writing Service KSA",
    para:"Stressing out due to assignment burden? Get excellent convenience from our Assignment Assistance in Saudi Arabia for all subjects. We offer exemplary academic writing help from top writers in the relevant fields. Hire us today and acquire the following: ",
    option:[
      {
        title:"Well-versed professionals for your coursework",
      },
      {
        title:"Affordable and budget-friendly service rates for all assignments ",
      },
      {
        title:"Foolproof data safety for your personal and academic details ",
      },
    ],
    formheading:"Employ the Best Assignment Helper Now!",
    formpara:"Place your order today and leverage exceptional service.",
    formoption:[
      {
        title:"Responsive service",
      },
      {
        title:"Regular order updates ",
      },
      {
        title:"Meticulous quality assurance ",
      },
    ]
  }

  const FeaturesContent = {
    heading:"Assignment Help Saudi Arabia",
    subheading:"Why Are We the Right Choice? ",
    option:[
      {
        icon:HighlyQualifiedWriters,
        title:"Highly Qualified Writers",
      },
      {
        icon:CheapServicePackages,
        title:"Cheap Service Packages",
      },
      {
        icon:CustomAssignments,
        title:"Custom Assignments ",
      },
      {
        icon:FreeRevisions,
        title:"Free Revisions",
      },
    ]
  };

  const AboutwritersContent = {
    heading:"Our Assignment Writers in Saudi Arabia - Adept Wordsmiths Crafting Academic Success",
    para:"Do you think tight study schedules negatively impact your assignment writing? Do you think you need professional assistance in this regard? Get in touch with Assignment Help Saudi Arabia today. We are an experienced team of writers and professional assignment helpers offering on-time and credible academic writing support to Saudi students. We have an extensive awareness of your academic problems, and we tailor our solutions according to them so that you can have the best support for your studies. To make your study routine effective and flexible, consider hiring our assignment help Saudi Arabia, as we are the reliable choice. ",
    option:[
      {
        title:"Guaranteed punctual order deliveries ",
      },
      {
        title:"Holistic assistance regarding all kinds of assignments ",
      },
      {
        title:"Conformance with your writing standards and specifications",
      }
    ]
  }

  const WhychooseContent = {
    heading:"A Distinctive Assignment Writing Help Saudi Arabia - Give the Best to Your Academics",
    para:"We are the best assignment helper for you, considering the various benefits we provide to the students. ",
    option:[
      {
        icon:Freerevisionss,
        title:"Free revisions",
      },
      {
        icon:Fullconfidentialits,
        title:"Full confidentiality ",
      },
      {
        icon:Throughoutsupports,
        title:"Throughout support ",
      },
      {
        icon:Freeplagiarismreportss,
        title:"Free plagiarism reports ",
      },
      {
        icon:Domainspecificwriterss,
        title:"Domain specific writers ",
      }
    ]
  }

  const PremiumservicesContent = {
    heading:"Excellent Saudi Arabia Assignment Help - Our Premier Services",
    para:"Serving You Beyond Bounds",
    option:[
      {
        icon:Essayss,
        title:"Essays",
        para:"Concerned about the quality of your essay writing tasks? Let our essay experts resolve your problems with their exceptional essay-writing capabilities. From descriptive to narrative, they can craft any essay with quality results. "
      },
      {
        icon:CaseStudiess,
        title:"Case Studies ",
        para:"Overwhelmed by the detailed task of your case study assignment? We can ease your stress with our commendable case study expertise. Order your case study sample today and write flawless content. "
      },
      {
        icon:Reportss,
        title:"Reports ",
        para:"Is it difficult to conform to the writing specifications of your reports? Our writers are experienced in report writing and can create simplified samples for you to learn. Hire them today. "
      },
      {
        icon:LiteratureReviews,
        title:"Literature Review",
        para:"Do you not have time to do comprehensive research for your literature review tasks? Hand over your assignment to our researchers and get holistic support in acquiring the latest and credible research references. "
      },
      {
        icon:Thesiss,
        title:"Thesis",
        para:"Do you think thesis writing is out of your writing capabilities? Rely on our expert writers and researchers to develop high quality and authentic theses. We offer assistance for all the issues in your thesis development. "
      },
      {
        icon:Dissertations,
        title:"Dissertation",
        para:"Are you facing trouble in your dissertation writing? We have highly qualified and professional dissertation developers who can assist you in creating accurate and well-researched dissertations at affordable rates. "
      }
    ]
  }

  const CtaContent = {
    heading:"Want to Enhance Your Academic Performance? ",
    subheading:"Hire Our Skilled Assignment Assistance in Saudi Arabia! We Guarantee Full Satisfaction",
    // treeheading:"We Guarantee Full Satisfaction",
  };

  const BackbonecontentData = {
    heading:"Quality Focused Assignment Help KSA - Avail Accomplished Writers for Your Academics",
    para:"At Assignment Help Saudi Arabia, we offer expert help for all your academic concerns with a professional and proactive approach. ",
    heading1:"Assignment Challenges Saudi Students Face - We Know All About Them!",
    para1:"When you are studying in Saudi Arabia, there are many challenges you can face, just like any other student from around the world. Among these academic difficulties, some of the factors that are the most bothersome include an imbalance between high academic coursework and other life commitments, complex subject topics and concepts, weak academic writing skills, unawareness regarding writing conventions according to academic domains and so on and so forth. However, for all such issues, now you have an excellent solution which is none other than our Assignment help KSA. Hire us today for your study convenience.",
    heading2:"Need to Know About Assignment Quality Elements? Consult Our Tutors",
    para2:"Do you want to understand what factors can really make your assignments stand out in the class? Hire our qualified assignment maker today and know all. As per our writers’ expertise, a good assignment reflects excellent readability and comprehensible structure and flow. It must be adhered well to the academic writing requirements and standards of your institute. For exemplary assignment writing, you should focus on the following elements and many others like them: ",
    option:[
      {
        title:"It must have original content. Do not steal content or use rephrasing tools. ",
      },
      {
        title:"Your language must be well-articulated. It should be understandable to your assessor. ",
      },
      {
        title:"Use consistent formatting throughout the assignment and a standard structure design. "
      }
    ],
    heading3:"How an Assignment Could Be Well-Structured? Learn From Our Samples",
    para3:"Want to learn how can you establish an assignment structure that can encourage your assessor to grant you good grades? Our experts help you extensively in this regard through their original and standard assignment samples. As per our sample writing, your structure should have headings, subheadings, a concise introduction, conformance with the required language and writing style, relevancy between the whole content and a perfectly concluded conclusion. ",
    heading4:"Why Should You Avoid Plagiarism in Assignments? Advice From Experts",
    para4:"Plagiarism is the main factor many students fail their assignments, which is very common among students. If your assessor finds your coursework plagiarised, you can seriously lose your grades. But why? Firstly, assignments are assigned with the purpose of checking students’ capabilities, and if you are copying someone else’s work, your learning can’t be assessed accurately. Secondly, as a moral student, it is your responsibility to work with academic integrity, and if you are not doing so, you are violating the principles of fairness and honesty. Other factors include: ",
    option2:[
      {
        title:"You learn and grow academically when you work on your assignments by yourself. ",
      },
      {
        title:"You develop and enhance your critical skills.",
      },
      {
        title:"It promotes fair competition among students. ",
      }
    ],
    heading5:"Why Do Timely Assignment Submissions Are Essential? We Understand This Factor Well!",
    para5:"One of the many reasons why students get low grades in their assignment tasks is late submission. Your assignment marks are sensitive to the submission timing of your project. This is because it reflects how responsible and dedicated to your studies you are. Further, it helps your assessor to grade and review your work on time, ensuring smooth academic processings. ",
    heading6:"What Can Our Assignment Writing Service KSA Offer to Your Studies?",
    para6:"For all your study and assignment writing concerns, our assignment writers in Saudi Arabia can be the best guide. They help you develop assignment projects with ease and quality elements and also ensure you get the maximum learning out of their support. With our comprehensive support and commendably made samples, you get the following learning benefits:",
    option3:[
      {
        title:"With our samples, you can easily understand your subject concepts. ",
      },
      {
        title:"Our experts can provide effective tips and strategies for your assignments. ",
      },
      {
        title:"You learn to incorporate the quality facets of academic writing into your assignments. "
      }
    ],
    heading7:"Assignment Assistance in Saudi Arabia for Your Data Security",
    para7:"Assignment Help Saudi Arabia not only just claims to be safe and secure for your data but also performs extensive measures for its effectiveness. Our team is professional and handles your information with care, following strict privacy policies. Besides, our policy prohibits sharing any kind of customer data with a third party and limits exposure of the data further by allowing only concerned individuals to make use of it. ",
    heading8:"Cheap Assignments Help KSA - Fair Work, Right Prices Guaranteed!",
    para8:"Assignment Help Saudi Arabia goes to great lengths to ensure that its customers are well-assisted for their needs. We are aware that students are usually short on money, and hiring expensive and costly assignment writing help can be beyond the reach of many students. Therefore, we offer affordable Saudi Arabia assignment help where all the rates are cheap and can easily fit within the student’s budget.  ",
    option4:[
      {
        title:"Our rates are feasible and accessible. ",
      },
      {
        title:"You are further facilitated with discounts and sale offers. ",
      },
      {
        title:"We also provide free revisions. ",
      }
    ]
  };

  const SubjectContent = {
    heading:"Assignment Writers KSA for Every Academic Discipline",
    para:"Our professional writers offer exceptional Saudi Arabia assignment help for all kinds of subject domains. ",
  };

  const OurwritersContent = {
    heading:"Well-Versed Assignment Writers in Saudi Arabia - Pick the Best One for Your Studies",
    option:[
      {
        image:HamzaSaleh,
        name:"Hamza Saleh ",
        designation:"Masters in Computer Science",
        experience:"Years Of Experience: 5 ",
        title:"What Can He Help With?",
        para:" Are coding assignments getting out of your comprehension abilities? No need to worry, as our expert and masters in computer science tutor is here to provide effective solutions. From coding to algorithms to software technicalities, he is a pro in all. ",
        successrate:"Rated: 96% success rate",
        completeProject:"400+ Projects Delivered",
        Expertise:[
          {
            title:"Programming languages",
          },
          {
            title:"algorithms",
          },
          {
            title:"software development",
          },
          {
            title:"data structures",
          },
        ]
      },
      {
        image:MahaAmal,
        name:"Maha Amal ",
        designation:"Masters in Business Administration",
        experience:"Years Of Experience: 4.5 ",
        title:"What Can She Help With?",
        para:"Do you need assignment help from an industry professional for your business management assignments? Our expert writer, Kiley Rein, is an accomplished assignment maker who has been offering holistic help to students regarding their business studies. Hire her and get quality samples. ",
        successrate:"Rated: 95% success rate",
        completeProject:"200+ Projects Delivered",
        Expertise:[
          {
            title:"Business strategy",
          },
          {
            title:"organisational behaviour",
          },
          {
            title:"marketing and sales",
          },
          {
            title:"operations management ",
          },
        ]
      },
      {
        image:AhmedSultan,
        name:"Ahmed Sultan",
        designation:"MPhil in Law",
        experience:"Years Of Experience: 6 ",
        title:"What Can He Help With?",
        para:"Are you afraid of getting low marks due to the writing quality of your law assignment? Let us handle your worries in the most effective manner with our exemplary assignment assistant, John Sean. He is a law expert and can offer satisfactory help. ",
        successrate:"Rated: 95.8% success rate",
        completeProject:"450+ Projects Delivered",
        Expertise:[
          {
            title:"Legal education",
          },
          {
            title:"understanding of various legal systems",
          },
          {
            title:"legal writing skills",
          },
          {
            title:"info regarding legal developments",
          },
        ]
      },
      {
        image:FatimaNoor,
        name:"Fatima Noor ",
        designation:"PhD in Economics ",
        experience:"Years Of Experience: 7 ",
        title:"What Can She Help With?",
        para:"Give your economics assignments excellent help from a professional assignment maker, Fatima Noor, who holds a Ph.D. in economics. She can create flawless assignments and help you learn complex topics easily. ",
        successrate:"Rated: 98% success rate",
        completeProject:"550+ Projects Delivered",
        Expertise:[
          {
            title:"Economics Theory",
          },
          {
            title:"microeconomics",
          },
          {
            title:"econometrics",
          },
          {
            title:"financial economics",
          },
        ]
      },
      {
        image:AbdullahFahad,
        name:"Abdullah Fahad ",
        designation:"Masters in Literature ",
        experience:"Years Of Experience: 6 ",
        title:"What Can He Help With?",
        para:"Are you seeking help with your literature coursework? Abdullah is our top writer regarding all types of literature assignments. He can write exceptional quality essays and other assignments. ",
        successrate:"Rated: 97% success rate",
        completeProject:"600+ Projects Delivered",
        Expertise:[
          {
            title:"Literacy analysis",
          },
          {
            title:"literacy criticism",
          },
          {
            title:"genre knowledge",
          },
          {
            title:"literary theory",
          },
        ]
      },
    ]
  };

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

  const ClientsaysContent = {
    heading:"Testimonials: Witness Our Service Dedication",
    para:"Students from Riyadh to Mecca trust our assignment writing expertise and you can witness that from their feedback. ",
    option:[
      {
        image:AazraSheikh,
        name:"Aazra Sheikh",
        location:"Riyadh",
        para:"It was really a very fruitful experience that I got by working with the laudable team of Assignment Help Saudi Arabia. They helped me effectively regarding my thesis and supported me with their worthy advice at every step. From abstract to conclusion, I found the service very satisfactory. I highly recommend them. "
      },
      {
        image:Merajulhaq,
        location:"Jeddah",
        name:"Meraj ul haq",
        para:"It was surely a five star rating from my side for this team, as they are splendid in their professionalism. They created a matchless quality assignment for me on an urgent basis with accurate conformance with my requirements and the assignment brief. The service charges were also very feasible. Recommended! "
      }
    ]
  }

  const ProcessContent = {
    heading:"Top Online Assignment Writing Help Saudi Arabia - Get Help Now!",
    option:[
      {
        image:PlaceOrder,
        title:"Place Order",
        para:"You can place your order through our 24/7 active online channels including WhatsApp number and chat support. ",
      },
      {
        image:ProvideInfo,
        title:"Provide Info",
        para:"After order registration, provide our team with all the necessary details regarding your assignment and academics. ",
      },
      {
        image:Processing,
        title:"Processing",
        para:"Our team will assign a relevant and experienced writer based on your order specifications. ",
      },
      {
        image:QAandDelivery,
        title:"QA and Delivery ",
        para:"After the draft completion, our quality assurance team will review it for further improvements and then will send it to you. ",
      }
    ]
  }

  return (
    <>
      <Header HeaderContent={HeaderContent} />
      <Features FeaturesContent={FeaturesContent} />
      <Aboutwriters AboutwritersContent={AboutwritersContent} />
      <Whychoose WhychooseContent={WhychooseContent} />
      <Premiumservices PremiumservicesContent={PremiumservicesContent} />
      <Cta CtaContent={CtaContent} />
      <Backbonecontent BackbonecontentData={BackbonecontentData} />
      <Subject SubjectContent={SubjectContent} />
      <Ourwriters OurwritersContent={OurwritersContent} />
      <Faqs FaqItems={FaqItems} FaqHeading={FaqHeading} />
      <Clientsays ClientsaysContent={ClientsaysContent} />
      <Process ProcessContent={ProcessContent} />
    </>
  )
}
