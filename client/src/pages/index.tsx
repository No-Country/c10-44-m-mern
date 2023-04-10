import React from "react";
import NavBar from "@/components/NavBar";
import HomeHero from "@/components/HomeHero";
import HomeFooter from "@/components/HomeFooter";
import BenefitsSection from "@/components/BenefitsSection";
import NewsletterSection from "@/components/NewsletterSection";
import CardSection from "@/components/CardsSection";
import ResponsiveHome from "@/components/ResponsiveHome";

export default function Home() {
  const [width, setWidth] = React.useState(0);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (width < breakpoint ? <ResponsiveHome /> :
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
