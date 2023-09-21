import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-10 w-full duration-300 ease-in">
      <div className="m-auto flex max-w-[1240px] items-center justify-between p-4 text-white">
        <Link href="/">
          <h1 className="text-4xl font-bold">Captur</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile menu toggle button */}
        <div className="z-10 block sm:hidden">
          <AiOutlineMenu size={20} />
        </div>

        {/* Mobile menu */}
        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden">
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
