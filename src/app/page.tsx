"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LandingLamp } from "@/components/LandingLamp";
import Description from "../components/Description";
import IntroDescription from "@/components/IntroDescription";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setIsLoading(false);

      document.body.style.cursor = "default";

      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <div className="bg-slate-950">
      <LandingLamp />
      <IntroDescription />
    </div>
  );
}
