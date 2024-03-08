import React from "react";

const Testemonials = () => {
  return (
    <div className="w-full py-10">
      <div className="text-center space-y-7">
        <h3>Testemonials</h3>
        <h2>
          read what others <br />
           have to say
        </h2>
      </div>

      <div className="w-full flex justify-between md:gap-8 mt-[70px] md:flex-row flex-col gap-16">
        {/*one item*/}
        <div className="md:w-1/3 h-[180px] bg-[#2e2762] rounded-xl relative justify-center items-center flex">
          {/*img*/}
          <div className="h-[100px] aspect-square absolute bg-black -top-[50px] rounded-full overflow-clip">
            <img src="/images/avatar.png" alt="" />
          </div>
          {/*text*/}
          <div className="text-center  h-fit pt-[55px] space-y-4">
            <h3 className="text-white leading-[27.5px] tracking-wider">
              OLIVIA COLE
            </h3>
            <p className="text-[16px] leading-[115%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
            </p>
          </div>
        </div>
        <div className="md:w-1/3 h-[180px] bg-[#2e2762] rounded-xl relative justify-center items-center flex">
          {/*img*/}
          <div className="h-[100px] aspect-square absolute bg-black -top-[50px] rounded-full overflow-clip">
            <img src="/images/avatar2.png" alt="" />
          </div>
          {/*text*/}
          <div className="text-center  h-fit pt-[55px] space-y-4">
            <h3 className="text-white leading-[27.5px] tracking-wider">
              OLIVIA COLE
            </h3>
            <p className="text-[16px] leading-[115%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
            </p>
          </div>
        </div>
        <div className="md:w-1/3 h-[180px] bg-[#2e2762] rounded-xl relative justify-center items-center flex">
          {/*img*/}
          <div className="h-[100px] aspect-square absolute bg-black -top-[50px] rounded-full overflow-clip">
            <img src="/images/avatar3.png" alt="" />
          </div>
          {/*text*/}
          <div className="text-center  h-fit pt-[55px] space-y-4">
            <h3 className="text-white leading-[27.5px] tracking-wider">
              OLIVIA COLE
            </h3>
            <p className="text-[16px] leading-[115%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
