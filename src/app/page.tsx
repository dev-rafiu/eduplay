import ExploreCourse from "@/components/explore-course";
import Faqs from "@/components/faqs";
import Download from "@/components/download";
import Games from "@/components/games";
import TryEduplay from "@/components/try-eduplay";
import Hero from "@/components/hero-section";
import Partners from "@/components/partners";
import Reviews from "@/components/reviews";
import Newsletter from "@/components/newsletter";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="space-y-4">
      <Hero />
      <Features />
      <Download />
      <ExploreCourse />
      <Games />/
      <Partners />
      <Newsletter />
      <Reviews />
      <Faqs />
      <TryEduplay />
    </div>
  );
}
