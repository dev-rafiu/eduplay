import Image from "next/image";

function Games() {
  return (
    <section>
      <h2>Join millions of confident learners </h2>
      <Image src="/images/games/globe.png" alt="" width={40} height={40} />
      <div>
        <div>
          <p>Loved by over</p>
          <p>30 million learners</p>
        </div>
        <div></div>
        <div>
          <p>Browse over</p>
          <p>50 million games </p>
        </div>
        <div></div>
        <div>
          <p>80% learners show</p>
          <p>increased confidence in 2 weeks</p>
        </div>
      </div>

      <div>
        <h3>Unlocking minds, One game at a time 🚀</h3>
        <p>
          Unlock joyful learning with EduPlay: Games that spark brilliance,
          practice sheets that perfect skills, and the best adventure for
          growing minds. Explore, Play, Thrive!
        </p>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>

        <div>
          <span>Games (3867+)</span>
          <span>Practice sheets (3238+)</span>
        </div>

        <div className="grid">
          <div>
            <Image
              src="/images/games/pre-kindergarten.png"
              alt=""
              width={150}
              height={80}
            />
            <h4>Pre-Kindergarten</h4>
            <ul>
              <li>Shapes</li>
              <li>Addition</li>
              <li>Counting</li>
            </ul>
            <a href="#">See all 320 games</a>
          </div>
          <div>
            <Image
              src="/images/games/kindergarten.png"
              alt=""
              width={150}
              height={80}
            />
            <h4>Kindergarten</h4>
            <ul>
              <li>Addition</li>
              <li>Geometry</li>
              <li>Number sense</li>
            </ul>
            <a href="#">See all 250 games</a>
          </div>
          <div>
            <Image
              src="/images/games/grade-one.png"
              alt=""
              width={150}
              height={80}
            />
            <h4>Grade 1</h4>
            <ul>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Subtraction</li>
            </ul>
            <a href="#">See all 410 games</a>
          </div>
        </div>

        <button>Browse our library</button>
        <p>We keep releasing new games every three weeks</p>
      </div>
      <Image src="/images/games/book.png" alt="" width={40} height={40} />
    </section>
  );
}

export default Games;
