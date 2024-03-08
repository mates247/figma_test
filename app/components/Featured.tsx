import React from "react";

const Featured = () => {
  return (
    <div className="space-y-7 py-10">
      <h3>Featured On</h3>
      <div className="bg-[#2f2963] md:w-full w-[80%] mx-auto md:h-[105px] h-auto py-5 rounded-xl flex flex-col md:flex-row justify-between md:px-12 items-center gap-8">
        <img
          className="max-h-[60px] sm:max-h-[70px]"
          src="/images/techCrunch.png"
          alt=""
        />
        <img className="i " src="/images/fastCompany.png" alt="" />
        <img className="i" src="/images/img_1.png" alt="" />
        <img className="i" src="/images/forbes.png" alt="" />
      </div>
    </div>
  );
};

export default Featured;
