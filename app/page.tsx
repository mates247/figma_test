import React from "react";
import Hero from "@/app/components/Hero";
import Featured from "@/app/components/Featured";
import Analytics from "@/app/components/Analytics";
import App from "@/app/components/App";
import Testimonials from "@/app/components/Testimonials";
import Ready from "@/app/components/Ready";

const Page = () => {
  return (
    <div className="space-y-7 pb-10">
      <Hero />
      <Featured />
      <Analytics />
      <App />
      <Testimonials />
      <Ready />
    </div>
  );
};

export default Page;
