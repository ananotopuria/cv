import React from 'react';

function Button(props) {
  return (
    <div className="rounded-lg bg-[#222935] hover:bg-[#26c17e] px-5 py-3 text-[#fff]" onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Button;