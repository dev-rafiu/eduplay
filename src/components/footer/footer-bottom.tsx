import Link from "next/link";

function FooterBottom() {
  return (
    <div className="flex justify-center flex-col space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:justify-between font-[500]">
      <nav>
        <ul className="flex gap-4 justify-between">
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
        &copy; Copyright <span>{new Date().getFullYear()},</span> All Rights
        Reserved
      </p>
    </div>
  );
}

export default FooterBottom;
