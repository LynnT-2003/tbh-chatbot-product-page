"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function SolutionDescription() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-9xl font-bold text-white">
              Our Solution
              <br />
              <span className="text-9xl md:text-[6rem] font-bold mt-1">
                Messenger Chatbot
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/solution_demo.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
