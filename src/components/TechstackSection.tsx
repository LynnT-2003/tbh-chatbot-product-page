"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { useGSAP } from "@gsap/react";

import {
  animateWithGsapLeft,
  animateWithGsapRight,
  animateWithGsapBottom,
} from "@/app/utils/animation";

export function TechStackSection() {
  useGSAP(() => {
    animateWithGsapBottom("#one", { y: 0, opacity: 1, duration: 1 });
    animateWithGsapBottom("#two", { y: 0, opacity: 1, duration: 1 });
  }, []);
  return (
    <div className="flex justify-center pb-24 gap-10 px-4">
      <div id="one">
        <p className="text-neutral-500 text-xl md:text-3xl max-w-xl mx-auto">
          We used{" "}
          <LinkPreview
            url="https://glitch.com/"
            className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500 font-bold"
          >
            Glitch
          </LinkPreview>{" "}
          for our integration into Messenger, and{" "}
          <LinkPreview
            url="https://wit.ai/"
            className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500 font-bold"
          >
            Wit.AI by META
          </LinkPreview>{" "}
          for our NLP requirements.
        </p>
      </div>

      <div id="two">
        <p className="text-neutral-500 text-xl md:text-3xl max-w-2xl mx-auto">
          Finally, we used{" "}
          <LinkPreview
            url="https://nextjs.org/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-500"
          >
            Next.JS
          </LinkPreview>{" "}
          for both our Frontend and Backend, alongside{" "}
          <LinkPreview
            url="https://www.mongodb.com/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-white"
          >
            MongoDB
          </LinkPreview>{" "}
          as our database.
        </p>
      </div>
    </div>
  );
}
