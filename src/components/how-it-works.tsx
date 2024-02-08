import Image from "next/image";
// import MobileAppScreen from "/public/images/mobile-app-screen.png";

function HowItWorks() {
  return (
    <section>
      <div>
        <h2>How it works: Downloading EduPlay</h2>
        <p>
          Discover the magic of EduPlay in just a few simple steps! Download the
          app and unlock a world where learning meets play. All designed to
          captivate young minds and make education an exciting journey.
        </p>
        <ul>
          <li>
            <span>1</span>
            <span>Download our app</span>
          </li>
          <li>
            <span>2</span>
            <span>Explore and Sign Up</span>
          </li>
          <li>
            <span>3</span>
            <span>Customize preferences for a personalized learning</span>
          </li>
          <li>
            <span>4</span>
            <span>Dive into Playful Learning</span>
          </li>
          <li>
            <span>5</span>
            <span>Track Progress and Celebrate Achievements</span>
          </li>
          <li>
            <span>6</span>
            <span>Stay Connected & Enjoy the Benefits of EduPlay</span>
          </li>
        </ul>

        <div>
          <a href="#">
            <Image
              src="/images/appstore.jpg"
              alt="Appstore link"
              width={80}
              height={80}
            />
          </a>

          <a href="#">
            <Image
              src="/images/playstore.jpg"
              alt="Playstore link"
              width={80}
              height={80}
            />
          </a>
        </div>
      </div>

      <div>
        <Image
          src="/images/mobile-app-screen.png"
          alt="mobile screen"
          width={500}
          height={300}
        />
      </div>
    </section>
  );
}

export default HowItWorks;
