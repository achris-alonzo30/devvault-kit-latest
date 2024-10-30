import { CTA } from "@/features/landing-page/components/cta/CTA";
import { FAQ } from "@/features/landing-page/components/faq/FAQ";
import { Hero } from "@/features/landing-page/components/hero/Hero";
import { Pricing } from "@/features/landing-page/components/pricing/Pricing";
import { Features } from "@/features/landing-page/components/features/Features";
import { HowToUse } from "@/features/landing-page/components/how-to-use/HowToUse";
import { Testimonials } from "@/features/landing-page/components/testimonials/Testimonials";
import { BannerStacks } from "@/features/landing-page/components/banner-stacks/BannerStacks"
import { TimeComparisonTable } from "@/features/landing-page/components/time-comparison-table/TimeComparisonTable";

export default function Home() {
  return (
    <main className="bg-background w-full">
      <Hero />
      <BannerStacks />
      <TimeComparisonTable />
      <Features />
      <HowToUse />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
