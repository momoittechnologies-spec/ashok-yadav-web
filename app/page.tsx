import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudyHall from "@/components/StudyHall";
import XeroxSection from "@/components/XeroxSection";
import DistanceEducation from "@/components/DistanceEducation";
import DigitalStudio from "@/components/DigitalStudio";
import QuickPrint from "@/components/QuickPrint";
import Materials from "@/components/Materials";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <StudyHall />
        <XeroxSection />
        <DistanceEducation />
        <DigitalStudio />
        <QuickPrint />
        <Materials />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
