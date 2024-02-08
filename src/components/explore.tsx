import Image from "next/image";

function Explore() {
  return (
    <section>
      <div>
        <h2>Explore exciting subjects, & play your way to brilliance</h2>
        <p>
          Why settle for ordinary when you can explore the extraordinary? Join
          us and discover why EduPlay is not just the best – it&apos;s the
          magical key to unlocking creativity for your kids.
        </p>

        <button>🎓 Explore our subjects</button>
      </div>

      <Image src="/images/explore-img.png" alt="" width={400} height={400} />
    </section>
  );
}

export default Explore;
