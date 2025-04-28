import Link from "next/link";
import Logo from "../ui/logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <Logo />
      <ul className="flex gap-8 items-center text-xl">
        <li>
          <Link href={""}>Home</Link>
        </li>
        <li>
          <Link href={""}>Blog</Link>
        </li>
        <li>
          <Link href={""}>Product</Link>
        </li>
        <li className="border-2 px-2 py-1 rounded bg-black hover:bg-white group">
          <Link
            href={""}
            className="text-white font-semibold group-hover:text-black"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
