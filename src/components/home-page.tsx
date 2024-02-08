import Image from "next/image";

function HomePage() {
  return (
    <section>
      <div>
        <div>
          <h1>
            Transforming education into <span>playful adventures</span>
          </h1>
          <p>
            At EduPlay, we believe in turning “I have to learn” into “I get to
            play and learn”. a journey filled with games that teach and play
            that enlightens.
          </p>
          {/* ctas */}
          <div>
            <button>How does it work?</button>
            <button>📚 Explore library</button>
          </div>
          <p>4.8/5.0 based on 2000 reviews</p> {/* // add ratings */}
        </div>

        <Image src="/images/homepage-img.png" alt="" width={400} height={400} />
      </div>

      {/* features */}
      <ul>
        <li>
          <Image
            src="/images/features/engaging-games.png"
            alt=""
            width={40}
            height={40}
          />
          <h3>Engaging Games</h3>
          <p>
            Kids play engaging, interactive games that are geared toward
            different subjects, making learning fun and efficient
          </p>
        </li>

        <li>
          <Image
            src="/images/features/practice-sheets.png"
            alt=""
            width={40}
            height={40}
          />
          <h3>Practice Sheets</h3>
          <p>
            Practice sheets are customized based on a child&apos;s learning
            progress, focusing on specific skills and concepts that may require
            additional reinforcement.
          </p>
        </li>

        <li>
          <Image
            src="/images/features/bedtime-stories.png"
            alt=""
            width={40}
            height={40}
          />
          <h3>Bedtime Stories </h3>
          <p>
            Children actively participate in the storytelling process, making
            bedtime an engaging and collaborative experience for both parents
            and kids.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default HomePage;
