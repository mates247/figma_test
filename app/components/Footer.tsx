import React from "react";

const Footer = () => {
  return (
    <footer className="w-full grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 py-10 ">
      <div className="hidden md:block">
        <h4>KRYPTO</h4>
      </div>
      <div className="space-y-7">
        <h4>krypto</h4>
        <div className=" space-y-2">
          <p>Home</p>
          <p>About</p>
          <p>Buy NFTs</p>
          <p>Sell NFTs</p>
        </div>
      </div>
      <div className="space-y-7">
        <h4>Market</h4>
        <div className=" space-y-2">
          <p>Browse NFTs</p>
          <p>Buy NFTs</p>
          <p>Sell NFTs</p>
        </div>
      </div>
      <div className="space-y-7">
        <h4>contact</h4>
        <div className=" space-y-2">
          <p>Email</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="sm:col-span-2 space-y-7">
        <h4>join our newsletter</h4>
        <div className="w-full rounded-full bg-[#2e2762] h-[50px] flex justify-between items-center">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent ml-4 outline-none"
          />
          <button className="bg-[#8383D7] h-full w-[100px] rounded-full">
            SEND
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
