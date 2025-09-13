import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { IntroductionSection } from "@/components/sections/introduction-section"
import { EthicsSection } from "@/components/sections/ethics-section"
import { ExtensionSection } from "@/components/sections/extension-section"
import { CommunityConceptSection } from "@/components/sections/community-concept-section"
import { CommunityChoiceSection } from "@/components/sections/community-choice-section"
import { CommunityCharacterizationSection } from "@/components/sections/community-characterization-section"
import { ProposalSection } from "@/components/sections/proposal-section"
import { ResourcesSection } from "@/components/sections/resources-section"
import { ConclusionSection } from "@/components/sections/conclusion-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroSection />
      <IntroductionSection />
      <EthicsSection />
      <ExtensionSection />
      <CommunityConceptSection />
      <CommunityChoiceSection />
      <CommunityCharacterizationSection />
      <ProposalSection />
      <ResourcesSection />
      <ConclusionSection />

      <Footer />
      <BackToTop />
    </main>
  )
}
