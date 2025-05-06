// Import subcomponents for each homepage section
import HeroSection from "./home/HeroSection";
import WhyWebBauHaus from "./home/WhyWebBauHaus";
import Services from "./home/Services";
import LaunchProcess from "./home/LaunchProcess";
import Portfolio from "./home/Portfolio";
import Pricing from "./home/Pricing";
import Maintenance from "./home/Maintenance";
import Testimonials from "./home/Testimonials";
import Faq from "./home/Faq";
import OfferBanner from "./home/OfferBanner";
import ReferralRewards from "./home/ReferralRewards";
import ExitIntentPopup from "./home/ExitIntentPopup";
import AnalyticsAddOn from "./home/AnalyticsAddOn";

export default function Home() {
  return (
    <main className="bg-white text-[color:var(--color-charcoal)]">
      <OfferBanner />
      <HeroSection />
      <WhyWebBauHaus />
      <Services />
      <LaunchProcess />
      <Portfolio />
      <Pricing />
      <Maintenance />
      <Testimonials />
      <Faq />
      <ReferralRewards />
      <AnalyticsAddOn />
      <ExitIntentPopup />
    </main>
  );
}
