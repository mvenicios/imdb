import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6x1 sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="Sobre" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className=" flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2x1">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-x1 hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
