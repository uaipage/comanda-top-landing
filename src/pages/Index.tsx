
import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import ComparisonSection from "@/components/ComparisonSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

// Importando TestimonialsSection mas mantendo-o comentado para uso futuro
// import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <ComparisonSection />
      {/* Seção de testemunhos temporariamente removida */}
      {/* <TestimonialsSection /> */}
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
