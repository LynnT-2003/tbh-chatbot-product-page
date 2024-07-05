import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import {
  animateWithGsapLeft,
  animateWithGsapRight,
  animateWithGsapBottom,
} from "@/app/utils/animation";

const ProblemStatement = () => {
  useGSAP(() => {
    animateWithGsapBottom("#problem", { y: 0, opacity: 1, duration: 1 });
    animateWithGsapBottom("#statement1", { y: 0, opacity: 1, duration: 1 });
    animateWithGsapBottom("#statement2", { y: 0, opacity: 1, duration: 1 });
    animateWithGsapBottom("#statement3", { y: 0, opacity: 1, duration: 1 });
    animateWithGsapLeft("#image", { y: 0, opacity: 1, duration: 3 });
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="flex mt-48 pb-64 pl-64">
        <span>
          <h1 id="problem" className="text-5xl text-white font-light">
            Problem Statement:
          </h1>
          <h1
            id="statement1"
            className="text-2xl text-slate-500 pt-12 font-medium"
          >
            1. &nbsp; Difficulty finding localized prices for products
          </h1>
          <h1
            id="statement2"
            className="text-2xl text-slate-500 pt-12 font-medium"
          >
            2. &nbsp; Challenges in locating specific products, such as a
            desired phone
          </h1>
          <h1
            id="statement3"
            className="text-2xl text-slate-500 pt-12 font-medium"
          >
            3. &nbsp; Uncertainty on purchasing decision due to a lack of proper
            information
          </h1>
        </span>
        <div id="image" className="flex items-center justify-center mx-48">
          <Image
            src="/painpoint.png"
            alt="sample.png"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
