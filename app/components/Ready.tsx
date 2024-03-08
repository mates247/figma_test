import React from "react";
import Button from "@/app/components/Button";

const Ready = () => {
  return (
    <div className=" w-full min-h-[500px] bg-gradient-to-br from-[#5050d0] to-[#9ad6d7] rounded-xl flex flex-col justify-between px-4 py-10 items-center text-center">
      <h3>are you ready?</h3>
      <h1>
        be a part of the 
        <br className="hidden md:block" /> next big thing
      </h1>
      <div className="w-[250px]">
        <Button title="Get started" style="black" />
      </div>
    </div>
  );
};

export default Ready;
