import Image from "next/image";

function TryEduplay() {
  return (
    <section className="relative pt-10 space-y-8 pb-0 bg-[hsl(240,33%,98%)]">
      <div className="container">
        <div className="flex sm:flex-row gap-4 lg:gap-12 flex-col-reverse">
          {/* section image */}
          <div className="w-full max-w-[45rem] h-[25rem] relative">
            <Image
              src="/images/get-started/primary-img.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* section info */}
          <div className="space-y-4 lg:pt-14">
            <h2>Try EduPlay for free</h2>
            <p className="max-w-md">
              Unlock knowledge through play. Dive into EduPlay&apos;s world of
              fun and discovery. Ready for endless smiles and learning
              adventures?
            </p>
            <button className="bg-violet text-background p-4 sm:py-3 leading-3 rounded font-semibold text-sm w-full lg:w-max">
              Get started for free
            </button>
          </div>
        </div>

        <div className="lg:flex items-center bottom-0 left-0 right-0 justify-between hidden px-8">
          <Image
            src="/images/get-started/img1.png"
            alt=""
            width={70}
            height={50}
          />
          <Image
            src="/images/get-started/img2.png"
            alt=""
            width={70}
            height={50}
          />
          <Image
            src="/images/get-started/img3.png"
            alt=""
            width={70}
            height={50}
          />
        </div>
      </div>
    </section>
  );
}

export default TryEduplay;
