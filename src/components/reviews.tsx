import Image from "next/image";

function Reviews() {
  return (
    <section>
      <h2>95% of parents said their children enjoy using EduPlay</h2>
      <p>
        Below are some of the reviews parents left on our App Store and Google
        Play
      </p>

      <div className="grid">
        <article>
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
          <p>Emily Halter (AppStore) CEO, NoonBrew</p>
        </article>

        <article>
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
          <p>Mars Sam (GooglePlay) CEO, NoonBrew</p>
        </article>

        <article>
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
          <p>Lisa Parker (AppStore) CEO, NoonBrew</p>
        </article>
      </div>

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
    </section>
  );
}

export default Reviews;
