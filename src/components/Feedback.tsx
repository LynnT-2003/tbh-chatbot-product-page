"use client";
import { HighlighterIcon } from "lucide-react";
import { CardStack } from "./ui/card-satck";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

import {
  animateWithGsapLeft,
  animateWithGsapRight,
  animateWithGsapBottom,
} from "@/app/utils/animation";

export function FeedbackSection() {
  useGSAP(() => {
    animateWithGsapBottom("#section", { y: 0, opacity: 1, duration: 5 });
  }, []);

  return (
    <div
      id="section"
      className="h-screen bg-black flex gap-48 items-center justify-center w-full"
    >
      <h1 className="text-white text-5xl font-bold">User Validation:</h1>
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Pyae Saw Oo",
    designation: "Director of Mobile Gallery Bangkok",
    content: (
      <p>
        I think this has a lot of <Highlight>potential</Highlight> since the way
        we do slaes right now is mainly through Facebook posts and Facebook
        marketplace which is very hard to manage and we{" "}
        <Highlight>require a lot of labor</Highlight>
        in handling customer queries. This system can help us{" "}
        <Highlight>reduce some of the workload</Highlight> of our staff and it’s
        amazing that it works in <Highlight>Burmese</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: "Shin Khant Kyaw",
    designation: "Director of Kyaw Mobile Mawlamyine",
    content: (
      <p>
        I'm sensing some <Highlight>serious "wow" vibes</Highlight>here,
        especially since it supports the <Highlight>Burmese language</Highlight>
        ! Love the CMS for making it accessible for non tech savvy admins.
        Unsure if it'll be a sales superstar, but hey, why not
        <Highlight> give it a try</Highlight> and see what happens?
      </p>
    ),
  },
];
