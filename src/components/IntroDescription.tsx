import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import {
  animateWithGsapLeft,
  animateWithGsapRight,
  animateWithGsapBottom,
} from "@/app/utils/animation";

const IntroDescription = () => {
  useGSAP(() => {
    animateWithGsapRight("#logo", { x: 0, opacity: 1, duration: 1 });
    animateWithGsapLeft("#phrase1", { x: 0, opacity: 1, duration: 1 });
    animateWithGsapBottom("#aboutme", { y: 0, opacity: 1, duration: 1 });
  }, []);

  const phrase1a =
    "A Digital Creator with over 2.4M followers on Facebook. A Number One tech influencer in Myanmar.";
  const phrase1b = "- Obsession always beats talent.";

  return (
    <div className="pb-24 px-[20vw] mx-auto">
      <div id="aboutme" className="flex items-start pb-6">
        <h1 className="text-6xl text-white">About TBH-Labs</h1>
      </div>

      <div className="flex">
        <div id="logo">
          <Image
            src="/tbhlabs.jpg"
            width={500}
            height={500}
            alt="tbhlabs_logo"
          />
        </div>

        <div id="phrase1" className="pl-12 flex justify-center items-center">
          <h1 className="text-3xl text-white font-thin">
            A Digital Creator with over 2.4M followers on Facebook & a Number
            One tech influencer in Myanmar, showcasing a variety of tech gadgets
            and updates in the captivating world of innovation.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroDescription;
