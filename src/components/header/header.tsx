import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header className="flex items-center justify-between container py-5">
      {/* desktop logo */}
      <Link href="/" className="hidden lg:inline-block">
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
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
