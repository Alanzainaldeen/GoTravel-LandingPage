import { navigationLinks } from "../../utils/content";

import LogoIcon from "../Icons/LogoIcon.tsx";
import SearchIcon from "../Icons/SearchIcon.tsx";
import CaretUp from "../Icons/CaretUp.tsx";
import BellIcon from "../Icons/BellIcon.tsx";

import DesktopDropdown from "./DesktopDropdown.tsx";
import Hamburger from "../Icons/Hamburger.tsx";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-x-2.5">
          <LogoIcon className="size-10 sm:size-13" />
          <span className="text-xl font-semibold sm:text-3xl">GoTravel</span>
        </a>
        <ul className="hidden items-stretch gap-x-10 lg:flex">
          {navigationLinks.map((link) => (
            <li
              key={link.id}
              className="group relative flex cursor-pointer items-center gap-x-1.75 font-medium transition-all duration-200"
            >
              <a
                className="text-grey-600 group-hover:text-black"
                href={link.href}
              >
                {link.text}
              </a>
              {link.dropdown && (
                <span className="flex size-6 items-center justify-center">
                  <CaretUp className="fill-grey-600 size-3.5 rotate-180 transition-all duration-250 group-hover:rotate-360 group-hover:fill-black" />
                </span>
              )}
              {link.dropdown && <DesktopDropdown links={link.dropdownLinks} />}
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-x-5 lg:flex">
          <BellIcon className="fill-grey-600 cursor-pointer hover:fill-black" />
          <SearchIcon className="fill-grey-600 cursor-pointer hover:fill-black" />
          <a
            href="#join-now"
            className="rounded-[0.625rem] bg-primary-700 px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-800 sm:px-8 sm:py-3.5 sm:text-lg"
          >
            Join Now
          </a>
        </div>

        <div className="lg:hidden">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}
