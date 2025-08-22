import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import OurSolutions from "@/components/OurSolutions";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import WhyBlockT from "@/components/WhyBlockT";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyBlockT />
      <OurSolutions />
      <Services />
      <CtaSection />
    </>
  );
}
