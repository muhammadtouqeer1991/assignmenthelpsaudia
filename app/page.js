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

export const metadata = {
  title: 'Assignment Help Saudia',
  description: '',
}

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Aboutwriters />
      <Whychoose />
      <Premiumservices />
      <Cta />
      <Backbonecontent />
      <Subject />
      <Ourwriters />
      <Faqs />
      <Clientsays />
    </>
  )
}
