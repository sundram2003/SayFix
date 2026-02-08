import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyChoose />
        <Services />
        <HowItWorks />
        <FAQ />
        <Clients />
      </main>
      <Contact />
    </>
  );
}
