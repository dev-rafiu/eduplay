import Image from "next/image";

function Hero() {
  return (
    <section className="bg-[#FBFBFD]">
      <div className="flex items-center justify-between max-w-md px-[2rem] lg:px-[4rem]">
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

      <div className="container grid gap-8 lg:grid-cols-[1fr,_1fr] pb-12">
        <div className="space-y-4">
          <h1 className="font-bold tracking-normal max-w-md leading-[3rem] lg:leading-[3.5rem]">
            Transforming education into
            <span className=""> playful adventures</span>
          </h1>

          <p className="max-w-[490px]">
            At EduPlay, we believe in turning “I have to learn” into “I get to
            play and learn”. a journey filled with games that teach and play
            that enlightens.
          </p>

          <div className="flex gap-4 flex-col lg:flex-row font-bold">
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

          <p className="lg:text-left text-center">
            4.8/5.0 based on 2000 reviews
            {/*  add ratings */}
          </p>
        </div>

        <div className="w-full h-[25rem] lg:h-[40rem] relative lg:-m-20">
          <Image
            src="/images/hero/hero-img.png"
            alt="kid"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
