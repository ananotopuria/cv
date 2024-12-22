import React from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTopButton() {
  
    return (
      <Link
        to="top"
        smooth={true}
        duration={500}
        className="fixed bottom-0 right-4 bg-[#222935] p-2 rounded text-white cursor-pointer"
      >
        <FontAwesomeIcon icon={faChevronUp} data-testid="up-chevron-icon" />
      </Link>
    );
  }


export default ScrollToTopButton;

