import Hero from "@/components/Hero";
import StudyHall from "@/components/StudyHall";
import XeroxSection from "@/components/XeroxSection";
import DistanceEducation from "@/components/DistanceEducation";
import DigitalStudio from "@/components/DigitalStudio";
import Materials from "@/components/Materials";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services-overview">
        <StudyHall />
        <XeroxSection />
        <DistanceEducation />
        <DigitalStudio />
        <Materials />
        <Reviews />
        <Location />
      </div>
    </>
  );
}
