import Link from "next/link";

function FooterBottom() {
  return (
    <div className="">
      <nav>
        <ul className="">
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms & Conditions</Link>
          </li>
          <li>
            <Link href="#">Support</Link>
          </li>
        </ul>
      </nav>

      <p>
        &copy; Copyright <span>{new Date().getFullYear()}.</span> All Rights
        Reserved
      </p>
    </div>
  );
}

export default FooterBottom;
