"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { useGSAP } from "@gsap/react";

import {
  animateWithGsapLeft,
  animateWithGsapRight,
  animateWithGsapBottom,
} from "@/app/utils/animation";

export function FeaturesGallery() {
  useGSAP(() => {
    animateWithGsapBottom("#mainfeatures", { y: 0, opacity: 1, duration: 3 });
    animateWithGsapBottom("#statement1", { y: 0, opacity: 1, duration: 1 });
  }, []);
  return (
    <div id="mainfeatures" className="h-screen pb-48 w-full bg-slate-950">
      <h1 className="flex items-center text-9xl mb-3 text-slate-600 font-bold justify-center">
        Main Features
      </h1>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Chatbot trained in Burmese
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A Chatbot ready to answer all your basic needs. We provide product
        recommendations, specs inquiries, and smartphone comparisons.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Web Application Embeds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A web application interface to provide users with summarized details
        about a smartphone alongside a link to the review video uploaded by
        TBHLabs (if any) and a link to the direct reseller.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Custom Admin CMS</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A custom Content Management at the ready for admins of mobile phone
        stores to easily manage their products, for the chatbot to utilize them
        in its application.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Private API Endpoint</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A private and secure API Endpoint established for a seamless integration
        between the database and chatbot itself, ensuring the latest, live, and
        up-to-date chatbot responses.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/demo1.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/demo2.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/demo3.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/demo4.png",
  },
];
