import React from "react";

function Title({ title, label }: { title: string; label: string }) {
  return (
    <div className="relative flex flex-col gap-4 text-white">
      {/* <p className=" gradient-green mb-4  rounded-tl-[12px] rounded-br-[12px] py-2 px-8 self-start uppercase text-sm font-medium border border-colour-1"></p> */}
      <p className="py-2 px-8 self-start uppercase text-sm font-medium border border-colour-1 rounded-[30px]">
        {label}
      </p>
      <h2>{title}</h2>
      <span>
        <hr />
      </span>
    </div>
  );
}

export default Title;
