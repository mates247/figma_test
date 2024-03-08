import React from "react";
import Button from "@/app/components/Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row py-10">
      <div className="flex-1  space-y-7">
        <div className="space-y-7">
          <h1>
            discover and collect rare <br className="hidden sm:block" /> NFTs
          </h1>
          <p>
            The most secure marketplace for buying   and selling unique crypto
            assets.
          </p>
        </div>
        <div className="w-full flex gap-[10px] ">
          <Button title="BUY NFTs" style="primary" />
          <Button title="SELL NFTs" style="secondary" />
        </div>
      </div>
      <div className="flex-1 h-full  my-auto hidden md:block">
        <img src="/images/pc.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
