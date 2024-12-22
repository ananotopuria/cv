import React from "react";

function Box({ title, content }) {
  return (
    <div className="box flex flex-col gap-5">
      <h2 className="text-xl font-bold text-[#26C17E]">{title}</h2>
      <p className="text-sm text-[#222935]">{content}</p>
    </div>
  );
}

export default Box;