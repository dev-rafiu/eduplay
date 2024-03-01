import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

import playstoreImg from "/public/images/playstore.jpg";
import appstoreImg from "/public/images/appstore.jpg";

function Header() {
  return (
    <header className="flex justify-between container py-5">
      {/* desktop logo */}
      <Link href="/" className="hidden lg:flex items-center">
        <Image src="/logo-desktop.png" alt="logo" width={90} height={70} />
      </Link>

      {/* mobile logo */}
      <Link href="/" className="lg:hidden">
        <Image src="/logo-mobile.png" alt="logo" width={32} height={40} />
      </Link>

      {/* menu button */}
      <button className="lg:hidden">
        <FiMenu size={30} />
      </button>

      {/* nav */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-8 capitalize">
          <li>
            <Link href="/" className="text-foreground font-semibold text-base">
              home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-400 text-base font-light">
              games
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-400 text-base font-light">
              subjects
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-400 text-base font-light">
              about
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <a href="#">
              <Image
                src={playstoreImg}
                alt="Playstore link"
                width={120}
                height={120}
                placeholder="blur"
              />
            </a>

            <a href="#" className="">
              <Image
                src={appstoreImg}
                className="bg-violet"
                alt="Appstore link"
                width={110}
                height={100}
                placeholder="blur"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
