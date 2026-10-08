import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ventures from "@/components/Ventures";
import Services from "@/components/Services";
import WhyAstranova from "@/components/WhyAstranova";
import Work from "@/components/Work";
import Impact from "@/components/Impact";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Ventures />
        <Services />
        <WhyAstranova />
        <Work />
        <Impact />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
