import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WhyItWorks from '@/components/WhyItWorks';
import IrresistibleStack from '@/components/IrresistibleStack';
import MembershipTiers from '@/components/MembershipTiers';
import Transparency from '@/components/Transparency';
import Upsells from '@/components/Upsells';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <Hero />
        <WhyItWorks />
        <IrresistibleStack />
        <MembershipTiers />
        <Transparency />
        <Upsells />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
