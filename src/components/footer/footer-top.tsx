import Image from "next/image";
import Link from "next/link";

const links = [
  {
    id: 1,
    category: "Quick links",
    links: [
      { id: 1, text: "home", Icon: null },
      { id: 2, text: "games", Icon: null },
      { id: 3, text: "subjects", Icon: null },
      { id: 4, text: "about", Icon: null },
    ],
  },
  {
    id: 2,
    category: "Company",
    links: [
      { id: 1, text: "about", Icon: null },
      { id: 2, text: "features", Icon: null },
      { id: 3, text: "works", Icon: null },
      { id: 4, text: "career", Icon: null },
    ],
  },
  {
    id: 3,
    category: "Connect with us",
    links: [
      {
        id: 1,
        text: "facebook",
        Icon: (
          <Image
            src="/images/icons/facebook.png"
            alt=""
            width={20}
            height={20}
          />
        ),
      },
      {
        id: 2,
        text: "instagram",
        Icon: (
          <Image
            src="/images/icons/instagram.png"
            alt=""
            width={20}
            height={20}
          />
        ),
      },
      {
        id: 3,
        text: "Twitter",
        Icon: (
          <Image
            src="/images/icons/twitter.png"
            alt=""
            width={20}
            height={20}
          />
        ),
      },
      {
        id: 4,
        text: "TikTok",
        Icon: (
          <Image src="/images/icons/tiktok.png" alt="" width={20} height={20} />
        ),
      },
    ],
  },
];

function FooterTop() {
  return (
    <div>
      <div className="">
        <Image src="/logo-desktop.png" alt="logo" width={80} height={80} />
        <p>
          Where every game is a lesson, and every lesson is a game. Our app
          transforms education into playful games, captivating young minds with
          interactive fun.
        </p>

        {/* download links */}
        <div>
          <a href="#" className="">
            <Image
              src="/images/appstore.jpg"
              className="bg-violet"
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
      </div>

      {links.map((item) => {
        const { id, category, links } = item;
        return (
          <div key={id}>
            <h4>{category}</h4>
            <ul>
              {links.map((link) => {
                const { id, text, Icon } = link;
                return (
                  <li key={id}>
                    <Link href="#" className="">
                      {Icon !== null && Icon}
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default FooterTop;