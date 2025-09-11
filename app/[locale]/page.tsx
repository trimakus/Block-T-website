import ChooseOurSolutions from "@/components/ChooseOurSolutions";
import CtaSection from "@/components/CtaSection";
import EmpoweringResearch from "@/components/EmpoweringResearch";
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
      <EmpoweringResearch/>
      <ChooseOurSolutions/>
      <OurSolutions />
      <Services />
      <CtaSection />
    </>
  );
}
