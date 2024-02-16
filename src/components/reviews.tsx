import Image from "next/image";

function Reviews() {
  return (
    <section className="container space-y-8 py-10">
      <header className="flex items-center flex-col lg:flex-row lg:justify-between">
        <Image
          src="/images/reviews/orbit.png"
          alt=""
          width={120}
          height={50}
          className="hidden lg:inline-block"
        />

        <div className="space-y-2 text-center">
          <h2 className="max-w-md">
            95% of parents said their children enjoy using EduPlay
          </h2>
          <p className="max-w-md">
            Below are some of the reviews parents left on our
            <a href="#" className="underline pl-1">
              App Store and Google Play
            </a>
          </p>
        </div>

        <Image
          src="/images/reviews/writing.png"
          alt=""
          width={150}
          height={50}
          className="hidden lg:inline-block"
        />
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <article className="space-y-2 shadow-md p-6 rounded">
          <Image
            src="/images/reviews/quote.png"
            alt=""
            width={20}
            height={20}
          />
          <p>
            EduPlay has been a game-changer for my 7-year-old! The adaptive
            games make learning enjoyable, and the personalized practice sheets
            are a lifesaver.
          </p>
          <p className="font-bold">Emily Halter (AppStore)</p>
        </article>

        <article className="space-y-2 shadow-md p-6 rounded">
          <Image
            src="/images/reviews/quote.png"
            alt=""
            width={20}
            height={20}
          />
          <p>
            The practice sheets help me get better at stuff, and the bedtime
            stories are super fun. I can even tell my own stories sometimes!
            EduPlay makes me look forward to learning.
          </p>
          <p className="font-bold">Mars Sam (GooglePlay)</p>
        </article>

        <article className="space-y-2 shadow-md p-6 rounded">
          <Image
            src="/images/reviews/quote.png"
            alt=""
            width={20}
            height={20}
          />
          <p>
            Homeschooling three kids can be challenging, but EduPlay has been a
            game-changer for us. The games cover a range of subjects, making
            learning diverse and engaging
          </p>
          <p className="font-bold">Lisa Parker (AppStore)</p>
        </article>
      </div>

      <div className="flex items-center gap-3 justify-center">
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
    </section>
  );
}

export default Reviews;
