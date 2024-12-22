import React, { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

const contactInfo = {
  email: {
    icon: faEnvelope,
    label: "Email:",
    value: "samantha@gmail.com",
  },
  phone: {
    icon: faPhone,
    label: "Phone:",
    value: "(+995)111111",
  },
  linkedin: {
    icon: faLinkedinIn,
    label: "LinkedIn:",
    value: "https://www.linkedin.com/",
  },
  facebook: {
    icon: faFacebook,
    label: "Facebook:",
    value: "https://www.facebook.com",
  },
  instagram: {
    icon: faInstagram,
    label: "Instagram:",
    value: "https://www.instagram.com",
  },
  github: {
    icon: faGithub,
    label: "GitHub:",
    value: "https://github.com",
  },
  gitlab: {
    icon: faGitlab,
    label: "GitLab:",
    value: "https://gitlab.com/",
  },
};

const Address = forwardRef((props, ref) => {
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="address text-gray-900">
      {Object.keys(contactInfo).map((key) => (
        <div
          key={key}
          className={`${key} mb-4 flex flex-col`}
          onClick={() => handleLinkClick(contactInfo[key].value)}
        >
          <span className="font-semibold">
            <FontAwesomeIcon
              icon={contactInfo[key].icon}
              className="text-2xl text-[#26c17e]"
            />
            <span className="ml-3 text-[#222935]">
              {contactInfo[key].label}
            </span>
          </span>
          <a href={contactInfo[key].value} className="ml-7 text-[#667081]">
            {contactInfo[key].value}
          </a>
        </div>
      ))}
    </div>
  );
});

export default Address;
