import AnimatedBackground from "@/components/effects/AnimatedBackground";
import Features from "@/components/landing/Features";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import UploadSection from "@/components/upload/UploadSection";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">
      <AnimatedBackground />

      <Navbar />

      <Hero />

      <Features />
      
<UploadSection />
    </main>
  );
}