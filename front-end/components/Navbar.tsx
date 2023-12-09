import { NAV_LINKS } from "@/constants";
import { link } from "fs";
import Image from "next/image"; //Optimizes images for faster load times
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={75} height={75}></Image>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <link href={link.href} key={link.key}>
              {link.label}
            </link>
          ))}
        </ul>
      </Link>
    </nav>
  );
};

export default Navbar;
