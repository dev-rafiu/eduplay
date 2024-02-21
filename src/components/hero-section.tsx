import Image from "next/image";

function Hero() {
  return (
    <section className="bg-[#FBFBFD]">
      <div className="flex lg:items-center justify-between max-w-md px-[2rem] lg:px-[4rem]">
        <Image
          src="/images/hero/design-left.jpg"
          alt=""
          width={40}
          height={100}
          className="object-cover"
        />
        <Image
          src="/images/hero/design-right.jpg"
          alt=""
          width={40}
          height={100}
          className="object-cover"
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
              className="bg-violet py-[10px] px-3 rounded text-background text-sm text-center"
            >
              How does it work?
            </a>
            <a
              href="#"
              className="bg-gray-100 py-[10px] px-3 rounded text-foreground text-sm text-center"
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
            src="/images/hero/hero-img.png"
            alt="kid"
            fill
            sizes="100vw"
            className="sm:object-cover object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
