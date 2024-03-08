import React from "react";
import Button from "@/app/components/Button";

const Analytics = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row">
      <div className="my-auto mx-auto hidden md:flex">
        <img src="/images/analytic.png" alt="" />
      </div>
      <div className="space-y-7  flex flex-col justify-center ">
        <h3>Analytics:</h3>
        <h2 className="md:text-start text-center">
          Build-in analytics to track your NFTs
        </h2>
        <div className="w-[80%] mx-auto md:mx-0 flex flex-col gap-[15px]">
          <p>
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.
          </p>
          <Button title="VIEW OUR PRICING" style="primary" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
