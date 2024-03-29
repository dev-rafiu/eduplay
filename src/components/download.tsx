import Image from "next/image";

function Download() {
  return (
    <section className="container py-10 flex flex-col sm:flex-row items-center sm:gap-8 gap-4 sm:justify-between relative">
      <Image
        src="/images/download/design.png"
        alt=""
        width={100}
        height={10}
        className="absolute top-0 left-0 hidden lg:inline-block"
      />

      {/* section info */}
      <div className="space-y-5">
        <h2 className="max-w-[380px] lg:w-[350px]">
          How it works: Downloading EduPlay
        </h2>

        <p className="max-w-md leading-6">
          Discover the magic of EduPlay in just a few simple steps! Download the
          app and unlock a world where learning meets play. All designed to
          captivate young minds and make education an exciting journey.
        </p>

        <ul className="grid gap-5">
          <li className="flex items-center gap-4 font-semibold">
            <span className="p-2 size-7 text-sm grid place-content-center text-background rounded-full bg-gradient-to-r from-sea-blue to-violet">
              1
            </span>
            <span>Download our app</span>
          </li>

          <li className="flex items-center gap-4 font-semibold">
            <span className="p-2 size-7 text-sm grid place-content-center text-background rounded-full bg-gradient-to-r from-sea-blue to-violet">
              2
            </span>
            <span>Explore and Sign Up</span>
          </li>

          <li className="flex items-center gap-4 font-semibold">
            <span className="p-2 size-7 text-sm grid place-content-center text-background rounded-full bg-gradient-to-r from-sea-blue to-violet">
              3
            </span>
            <span>Customize preferences for a personalized learning</span>
          </li>

          <li className="flex items-center gap-4 font-semibold">
            <span className="p-2 size-7 text-sm grid place-content-center text-background rounded-full bg-gradient-to-r from-sea-blue to-violet">
              4
            </span>
            <span>Dive into Playful Learning</span>
          </li>

          <li className="flex items-center gap-4 font-semibold">
            <span className="p-2 size-7 text-sm grid place-content-center text-background rounded-full bg-gradient-to-r from-sea-blue to-violet">
              5
            </span>
            <span>Track Progress and Celebrate Achievements</span>
          </li>

          <li className="flex items-center gap-4 font-semibold">
            <span className="p-2 size-7 text-sm grid place-content-center text-background rounded-full bg-gradient-to-r from-sea-blue to-violet">
              6
            </span>
            <span>Stay Connected & Enjoy the Benefits of EduPlay</span>
          </li>
        </ul>

        {/* download links */}
        <div className="flex items-center gap-3">
          <a href="#">
            <Image
              src="/images/playstore.jpg"
              alt="Playstore link"
              width={120}
              height={120}
            />
          </a>

          <a href="#" className="">
            <Image
              src="/images/appstore.jpg"
              className="bg-violet"
              alt="Appstore link"
              width={110}
              height={100}
            />
          </a>
        </div>
      </div>

      {/* section image */}
      <div className="relative w-[20rem] h-[36rem] lg:h-[35rem]">
        <Image
          src="/images/download/mobile-screen.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default Download;
