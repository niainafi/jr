
// import UserProfilInfo from '@/components/user-profil-info'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import ProfilLayout from '@/components/layouts/profil-layout'
import { useUserStore } from '@/store/user'
// const ProfilLayout = dynamic(() => import('@/components/layouts/profil-layout'), { ssr: false })
// const UserProfilInfo = dynamic(() => import('@/components/user-profil-info'), { ssr: false })
import UserProfilInfo from '@/components/user-profil-info'


export default function ProflePage() {


  return (
    <>
    <HeroSection/>
    <ProfilLayout>
      <UserProfilInfo />
    </ProfilLayout>
    <Footer/>
    </>
  )
}
