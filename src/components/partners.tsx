import Image from "next/image";

function Partners() {
  return (
    <section>
      <h2>You might know us from</h2>
      <ul>
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
