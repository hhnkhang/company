import React from "react";

function Title({ title, label }: { title: string; label: string }) {
  return (
    <div className="relative flex flex-col gap-4 text-white">
      {/* <p className=" gradient-green mb-4  rounded-tl-[12px] rounded-br-[12px] py-2 px-8 self-start uppercase text-sm font-medium border border-colour-1"></p> */}
      <p className="py-2 px-9 gradient-green mb-4  rounded-tl-[20px] rounded-br-[20px] self-start uppercase text-sm font-medium border border-colour-1 ">
        {label}
      </p>
      <h2 className="font-bold text-2xl md:text-4xl">{title}</h2>
      <span>
        <hr className="w-20 border-2 border-colour-3 rounded-lg" />
      </span>
    </div>
  );
}

export default Title;
