import React from "react";

type HeroProps = {
  heading: string;
  message: string;
};
function Hero({ heading, message }: HeroProps) {
  return (
    <div className="custom-img mb-12 flex h-screen items-center justify-center bg-cover bg-fixed bg-center">
      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] bg-black/70" />
      <div className="z-[2] mt-[-10rem] p-5 text-white">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="border px-8 py-2">Book</button>
      </div>
    </div>
  );
}

export default Hero;
