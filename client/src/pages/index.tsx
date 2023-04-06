import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import HomeHero from "@/components/HomeHero";
import HomeFooter from "@/components/HomeFooter";
import BenefitsSection from "@/components/BenefitsSection";
import NewsletterSection from "@/components/NewsletterSection";
import CardSection from "@/components/CardsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeHero />
      <CardSection />
      <BenefitsSection />
      <NewsletterSection />
      <HomeFooter />
    </>
  );
}
