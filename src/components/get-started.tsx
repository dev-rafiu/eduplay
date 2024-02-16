import Image from "next/image";

function GetStarted() {
  return (
    <section className="container relative pt-10 space-y-8 pb-0">
      <div className="flex lg:flex-row gap-4 lg:gap-12 flex-col-reverse justify-between">
        <div className="w-full max-w-[48rem] h-[25rem] relative">
          <Image
            src="/images/get-started/primary-img.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4 lg:pt-12">
          <h2>Try EduPlay for free</h2>
          <p className="max-w-lg">
            Unlock knowledge through play. Dive into EduPlay&apos;s world of fun
            and discovery. Ready for endless smiles and learning adventures?
          </p>
          <button className="bg-violet text-background py-2 px-3 rounded font-semibold text-sm w-full lg:w-max">
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
    </section>
  );
}

export default GetStarted;
