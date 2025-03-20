"use client"
// import UserProfilInfo from '@/components/user-profil-info'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import ProfilLayout from '@/components/layouts/profil-layout'
import { useUserStore } from '@/store/user'
// const ProfilLayout = dynamic(() => import('@/components/layouts/profil-layout'), { ssr: false })
const UserProfilInfo = dynamic(() => import('@/components/user-profil-info'), { ssr: false })
export default function ProflePage() {


  return (
    <ProfilLayout>
        <UserProfilInfo />
    </ProfilLayout>
  )
}
