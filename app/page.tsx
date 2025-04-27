import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "Learniverse - Study System",
  description: "Learniverse - A platform for creative study",
  openGraph: {
    type: "website",
    url: "https://github.com/learniverse-alpha",
    title: "Learniverse - Study System",
    description: "Learniverse - A platform for creative study",
    images: [
      {
        url: "/LearniverseLogo.png",
        width: 1200,
        height: 630,
        alt: "Learniverse - Study System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/learniverse-alpha/learniverse-landing-page",
    title: "Learniverse - Study System",
    description: "Learniverse - A platform for creative study",
    images: [
      "/LearniverseLogo.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      {/* <ServicesSection />
      <TestimonialSection /> */}
      <TeamSection />
      {/* <CommunitySection /> */}
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
