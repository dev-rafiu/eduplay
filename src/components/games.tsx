import Image from "next/image";

function Games() {
  return (
    <section className="container space-y-8 lg:space-y-12 relative py-10">
      <header className="space-y-4">
        <h2 className="text-center">Join millions of confident learners </h2>
        <ul className="flex flex-col lg:flex-row gap-0 justify-center max-w-2xl mx-auto text-center">
          <li>
            <p>Loved by over</p>
            <p className="font-bold">30 million learners</p>
          </li>

          <li className="w-[1px] lg:h-12 h-8 bg-gray-100 mx-auto rotate-90 lg:rotate-0"></li>

          <li>
            <p>Browse over</p>
            <p className="font-bold">50 million games </p>
          </li>

          <li className="w-[1px] lg:h-12 h-8 bg-gray-100 mx-auto rotate-90 lg:rotate-0"></li>

          <li>
            <p>80% learners show</p>
            <p className="font-bold">increased confidence in 2 weeks</p>
          </li>
        </ul>
      </header>

      <div>
        <Image
          src="/images/games/globe.png"
          alt=""
          width={80}
          height={70}
          className="hidden lg:inline-block absolute left-8"
        />
        <Image
          src="/images/games/book.png"
          alt=""
          width={80}
          height={70}
          className="hidden lg:inline-block absolute right-8"
        />
      </div>

      <div className="space-y-6 text-center">
        <h3>Unlocking minds, One game at a time 🚀</h3>
        <p className="max-w-2xl mx-auto">
          Unlock joyful learning with EduPlay: Games that spark brilliance,
          practice sheets that perfect skills, and the best adventure for
          growing minds.
          <span className="bg-sea-blue/50 ml-1 px-1">
            Explore, Play, Thrive!
          </span>
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-4 justify-center lg:gap-6">
          <ul className="flex items-center gap-4">
            <li className="size-8 bg-gradient-to-r from-sea-blue to-violet grid place-content-center rounded-full text-background">
              1
            </li>

            <li className="size-8 ounded-full bg-gradient-to-r from-sea-blue to-violet grid place-content-center rounded-full">
              <span className="bg-background size-7 rounded-full grid place-content-center">
                2
              </span>
            </li>

            <li className="size-8 ounded-full bg-gradient-to-r from-sea-blue to-violet grid place-content-center rounded-full">
              <span className="bg-background size-7 rounded-full grid place-content-center">
                3
              </span>
            </li>

            <li className="size-8 ounded-full bg-gradient-to-r from-sea-blue to-violet grid place-content-center rounded-full">
              <span className="bg-background size-7 rounded-full grid place-content-center">
                4
              </span>
            </li>

            <li className="size-8 ounded-full bg-gradient-to-r from-sea-blue to-violet grid place-content-center rounded-full">
              <span className="bg-background size-7 rounded-full grid place-content-center">
                5
              </span>
            </li>

            <li className="size-8 ounded-full bg-gradient-to-r from-sea-blue to-violet grid place-content-center rounded-full">
              <span className="bg-background size-7 rounded-full grid place-content-center">
                6
              </span>
            </li>
          </ul>
          <span className="hidden lg:block h-10 bg-gray-100 w-[2px]"></span>
          <div className="grid grid-cols-2 bg-gradient-to-r from-sea-blue to-violet rounded-full overflow-hidden">
            <div className="p-2 text-background">Games (3867+)</div>
            <div className="bg-background grid place-content-center border m-[1px] rounded-full rounded-l-none px-4">
              <span className="">Practice sheets (3238+)</span>
            </div>
          </div>
        </div>

        {/* games grid */}
        <div className="grid gap-4 lg:gap-6 lg:grid-cols-3 text-left">
          <article className="shadow-lg rounded-md overflow-hidden">
            <div className="relative w-full h-56">
              <Image
                src="/images/games/pre-kindergarten.png"
                alt=""
                fill
                className="object-fill"
              />
            </div>

            <div className="py-4 px-6 space-y-4">
              <h4>Pre-Kindergarten</h4>
              <ul className="flex items-center gap-4 mb-4">
                <li className="py-1 px-2 bg-sea-blue/20 text-sea-blue font-semibold text-sm rounded">
                  Shapes
                </li>
                <li className="py-1 px-2 bg-sea-blue/20 text-sea-blue font-semibold text-sm rounded">
                  Addition
                </li>
                <li className="py-1 px-2 bg-sea-blue/20 text-sea-blue font-semibold text-sm rounded">
                  Counting
                </li>
              </ul>
              <a href="#" className="block text-violet underline">
                See all 320 games
              </a>
            </div>
          </article>

          <article className="shadow-lg rounded-md overflow-hidden">
            <div className="relative w-full h-56 rounded">
              <Image
                src="/images/games/kindergarten.png"
                alt=""
                fill
                className="object-fill"
              />
            </div>

            <div className="py-4 px-6 space-y-4">
              <h4>Kindergarten</h4>
              <ul className="flex items-center gap-4">
                <li className="py-1 px-2 bg-sea-blue/20 text-sea-blue font-bold text-sm rounded">
                  Addition
                </li>
                <li className="py-1 px-2 bg-sea-blue/20 text-sea-blue font-bold text-sm rounded">
                  Geometry
                </li>
                <li className="py-1 px-2 bg-sea-blue/20 text-sea-blue font-bold text-sm rounded">
                  Number sense
                </li>
              </ul>
              <a href="#" className="text-violet underline block">
                See all 250 games
              </a>
            </div>
          </article>

          <article className="shadow-lg rounded-md overflow-hidden">
            <div className="relative w-full h-56">
              <Image
                src="/images/games/grade-one.png"
                alt=""
                fill
                className="object-fill"
              />
            </div>

            <div className="py-4 px-6 space-y-4">
              <h4>Grade 1</h4>
              <ul className="flex items-center gap-4">
                <li className="py-1 px-2 bg-sea-blue/20 text-sea-blue font-bold text-sm rounded">
                  Mathematics
                </li>
                <li className="py-1 px-2 bg-sea-blue/20 text-sea-blue font-bold text-sm rounded">
                  Science
                </li>
                <li className="py-1 px-2 bg-sea-blue/20 text-sea-blue font-bold text-sm rounded">
                  Subtraction
                </li>
              </ul>
              <a href="#" className="block text-violet underline">
                See all 410 games
              </a>
            </div>
          </article>
        </div>

        <div className="space-y-2">
          <button className="bg-violet text-background py-2 px-3 rounded font-semibold text-sm">
            Browse our library
          </button>

          <p className="flex items-center gap-2 justify-center">
            <Image src="/images/bell.png" alt="" width={20} height={20} />
            <span>We keep releasing new games</span>
            <span className="underline">every three weeks</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Games;
