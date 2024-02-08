import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header>
      <Link href="/" className="hidden lg:inline-block">
        <Image src="/logo-desktop.png" alt="logo" width={90} height={70} />
      </Link>

      <Link href="/" className="lg:hidden">
        <Image src="/logo-mobile.png" alt="logo" width={32} height={40} />
      </Link>

      <button className="lg:hidden">
        <FiMenu size={30} />
      </button>

      <nav className="hidden lg:block">
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="#">games</Link>
          </li>
          <li>
            <Link href="#">subjects</Link>
          </li>
          <li>
            <Link href="#">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
