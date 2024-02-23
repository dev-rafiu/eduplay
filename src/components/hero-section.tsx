import Image from "next/image";

import sectionImage from "/public/images/hero/hero-img.png";
import designLeft from "/public/images/hero/design-left.jpg";
import designRight from "/public/images/hero/design-left.jpg";

function Hero() {
  return (
    <section className="bg-[#FBFBFD]">
      <div className="flex lg:items-center justify-between max-w-md px-[2rem] lg:px-[4rem]">
        <Image
          src={designLeft}
          alt=""
          width={40}
          height={100}
          placeholder="blur"
        />
        <Image
          src={designRight}
          alt=""
          width={40}
          height={100}
          placeholder="blur"
        />
      </div>

      <div className="container grid gap-8 sm:grid-cols-[1fr,_1fr]">
        {/* section info */}
        <div className="space-y-4">
          <h1 className="font-bold tracking-normal max-w-md leading-[3rem] lg:leading-[3.5rem]">
            Transforming education into
            <span className="bg-gradient-to-r from-sea-blue to-violet bg-clip-text text-transparent">
              {" "}
              playful adventures
            </span>
          </h1>

          <p className="max-w-lg">
            At EduPlay, we believe in turning “I have to learn” into “I get to
            play and learn”. a journey filled with games that teach and play
            that enlightens.
          </p>

          {/* ctas */}
          <div className="flex gap-4 flex-col sm:flex-row font-bold">
            <a
              href="#"
              className="bg-violet px-4 sm:py-3 py-4 rounded text-background text-sm text-center"
            >
              How does it work?
            </a>
            <a
              href="#"
              className="bg-gray-100 px-4 sm:py-3 py-4 rounded text-foreground text-sm text-center"
            >
              📚 Explore library
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm font-medium justify-center sm:justify-start">
            <span>4.8/5.0</span>
            <Image
              src="/images/ratings.png"
              alt="ratings"
              width={90}
              height={40}
            />
            <span>based on 2000 reviews</span>
          </p>
        </div>

        {/* section image */}
        <div className="w-full h-[20rem] sm:h-[30rem] relative">
          <Image
            src={sectionImage}
            alt="kid"
            fill
            sizes="100vw"
            placeholder="blur"
            className="sm:object-cover object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
