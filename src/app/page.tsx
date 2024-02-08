import Explore from "@/components/explore";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Games from "@/components/games";
import GetStarted from "@/components/get-started";
import HomePage from "@/components/home-page";
import HowItWorks from "@/components/how-it-works";
import Partners from "@/components/partners";
import Reviews from "@/components/reviews";
import Subscription from "@/components/subscription";

export default function Home() {
  return (
    <main>
      <HomePage />
      <HowItWorks />
      <Explore />
      <Games />
      <Partners />
      <Subscription />
      <Reviews />
      <Faqs />
      <GetStarted />
      <Footer />
    </main>
  );
}
