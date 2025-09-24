import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopListSection from "@/components/TopListSection";
import BestPotatoesSection from "@/components/BestPotatoesSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-cream to-warm-peach">
      <div className="w-full max-w-6xl mx-auto bg-background/95 backdrop-blur-sm md:rounded-3xl shadow-xl overflow-hidden min-h-screen">
        <div className="max-w-md mx-auto md:max-w-4xl lg:max-w-5xl">
          <Header />
          <HeroSection />
          <TopListSection />
          <BestPotatoesSection />
          <ServicesSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
