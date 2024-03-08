import React from "react";
import Button from "@/app/components/Button";

const App = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row-reverse py-10">
      <div className="my-auto mx-auto hidden md:flex">
        <img src="/images/app.png" alt="" />
      </div>
      <div className="space-y-7  flex flex-col justify-center ">
        <h3>App:</h3>
        <h2 className="md:text-start text-center">
          Browse nfts from your smartphone
        </h2>
        <div className="w-[80%] mx-auto md:mx-0 flex flex-col gap-[15px]">
          <p>
            Our Krypto app is the easiest way to keep track of your assets when
            you’re on the go.
          </p>
          <Button title="GET OUR APP" style="primary" />
        </div>
      </div>
    </div>
  );
};

export default App;
