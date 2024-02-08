import Image from "next/image";

function GetStarted() {
  return (
    <section>
      <Image
        src="/images/get-started/primary-img.png"
        alt=""
        width={400}
        height={400}
      />
      <h2>Try EduPlay for free</h2>
      Unlock knowledge through play. Dive into EduPlay&apos;s world of fun and
      discovery. Ready for endless smiles and learning adventures?
      <button>Get started for free</button>
      <div>
        <Image
          src="/images/get-started/img1.png"
          alt=""
          width={40}
          height={40}
        />
        <Image
          src="/images/get-started/img2.png"
          alt=""
          width={40}
          height={40}
        />
        <Image
          src="/images/get-started/img3.png"
          alt=""
          width={40}
          height={40}
        />
      </div>
    </section>
  );
}

export default GetStarted;
