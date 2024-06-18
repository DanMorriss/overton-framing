import { useState } from "react";

import "./navbar.styles.css";

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-5 gap-3">
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
        <div className={isNavOpen ? "showMenuNav" : "hidden"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN">
            <li>
              <a href="#">Meet Amanda</a>
            </li>
            <li>
              <a href="#">Framing Process</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Examples</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </section>

      <ul className=" DESKTOP-MENU hidden lg:flex">
        <li>
          <a href="#">DESKTOP Meet Amanda</a>
        </li>
        <li>
          <a href="#">Framing Process</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Examples</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
