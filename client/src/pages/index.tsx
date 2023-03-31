import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import HomeHero from '@/components/HomeHero'
import NewCourse from '@/components/NewCourse'
import PricingSection from '@/components/PricingSection'
import HomeFooter from '@/components/HomeFooter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavBar/> 
      <HomeHero/>
      <PricingSection/>
      <HomeFooter/>
    </>
  )
}
