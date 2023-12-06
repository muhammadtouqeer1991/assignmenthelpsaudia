import Image from 'next/image'
import Header from '@/components/Header'
import Features from '@/components/Features'
import Aboutwriters from '@/components/Aboutwriters'
import Whychoose from '@/components/Whychoose'
import Premiumservices from '@/components/Premiumservices'

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
    </>
  )
}
