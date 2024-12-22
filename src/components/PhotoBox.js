import React from "react";

function PhotoBox(props) {
  const view1 = (
    <div className="app-section__panel--user">
      <img
        src={props.imgSrc}
        className="mx-auto border border-white rounded-full w-[20rem] aspect-square object-cover"
        alt={`${props.fullName} avatar`}
      />
      <h3 className="max-w-600 hidden">{props.fullName}</h3>
      {props.children}
    </div>
  );
  const view2 = (
    <div className="mt-20 flex flex-col items-center justify-center gap-4">
      <img
        src={props.imgSrc}
        className="mx-auto aspect-square w-80 rounded-full border border-white object-cover"
        alt={`${props.fullName} avatar`}
      />
      <h1 className="text-4xl font-semibold text-white xl:text-6xl">
        {props.fullName}
      </h1>
      <h2 className="text-2xl text-white">{props.position}</h2>
      <div className="mx-[2rem] text-center text-lg text-white xl:mx-[10rem]">
        {props.description}
      </div>
      {props.children}
    </div>
  );
  if (props.position && props.description) return view2;
  else return view1;
}

export default PhotoBox;
