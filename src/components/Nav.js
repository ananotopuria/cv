import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPencil,
  faMagicWandSparkles,
  faSuitcase,
  faAddressBook,
  faComment,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";

function NavLink({ to, icon, text }) {
  return (
    <li className="hidden sm:block">
      <ScrollLink to={to} spy={true} smooth={true} duration={800} className="cursor-pointer hover:text-[#26c27e] flex items-center">
        <FontAwesomeIcon icon={icon} />
        <span className="p-4">{text}</span>
      </ScrollLink>
    </li>
  );
}

function Nav() {
  return (
    <div>
      <div className="p-8">
        <ul className="p- flex flex-col sm:w-32 md:w-32">
          {[
            { to: "about", icon: faUser, text: "About Me" },
            { to: "education", icon: faGraduationCap, text: "Education" },
            { to: "experience", icon: faPencil, text: "Experience" },
            { to: "skills", icon: faMagicWandSparkles, text: "Skills" },
            { to: "portfolio", icon: faSuitcase, text: "Portfolio" },
            { to: "contacts", icon: faAddressBook, text: "Contacts" },
            { to: "feedback", icon: faComment, text: "Feedback" },
          ].map((item, index) => (
            <NavLink key={index} {...item} />
          ))}
          <li className="hidden sm:block">
            <Link to="/" className="absolute bottom-8 left-5 md:w-[9rem] lg:w-[10rem]">
              <Button className="flex flex-row">
                <FontAwesomeIcon icon={faChevronLeft} />
                <span className="p-2 md:p-4 lg:p-2">Go back</span>
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="sm:hidden flex flex-col gap-4 items-center">
          {[
            { to: "about", icon: faUser },
            { to: "education", icon: faGraduationCap },
            { to: "experience", icon: faPencil },
            { to: "skills", icon: faMagicWandSparkles },
            { to: "portfolio", icon: faSuitcase },
            { to: "contacts", icon: faAddressBook },
            { to: "feedback", icon: faComment },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              <ScrollLink to={item.to} spy={true} smooth={true} duration={800} className="cursor-pointer hover:text-[#26c27e] flex items-center">
                <FontAwesomeIcon icon={item.icon} />
              </ScrollLink>
            </li>
          ))}
          <li className="nav-item absolute bottom-8 left-5">
            <Link to="/" className="cursor-pointer rounded-lg bg-[#26c17e] px-4 py-2 text-[#fff]">
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
