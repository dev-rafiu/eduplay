import Image from "next/image";

function Partners() {
  return (
    <section className="text-center space-y-8 py-10">
      <h2>You might know us from</h2>
      <ul className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto lg:gap-14">
        <li>
          <Image
            src="/images/partners/kuukid.png"
            alt=""
            width={100}
            height={100}
          />
        </li>

        <li>
          <Image
            src="/images/partners/cocobee.png"
            alt=""
            width={100}
            height={100}
          />
        </li>

        <li>
          <Image
            src="/images/partners/destiny-kids.png"
            alt=""
            width={100}
            height={100}
          />
        </li>

        <li>
          <Image
            src="/images/partners/melbourne.png"
            alt=""
            width={100}
            height={100}
          />
        </li>

        <li>
          <Image
            src="/images/partners/parent-choice.png"
            alt=""
            width={100}
            height={100}
          />
        </li>

        <li>
          <Image
            src="/images/partners/kids-choice.png"
            alt=""
            width={100}
            height={100}
          />
        </li>

        <li>
          <Image
            src="/images/partners/autism-parenting.png"
            alt=""
            width={100}
            height={100}
          />
        </li>
      </ul>
    </section>
  );
}

export default Partners;
