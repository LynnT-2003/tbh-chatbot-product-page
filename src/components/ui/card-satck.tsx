"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 20;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const handleClick = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
  };

  return (
    <div>
      <div
        className="relative h-72 w-72 md:h-[24rem] md:w-[32rem]"
        onClick={handleClick}
      >
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black bg-white h-72 w-72 md:h-[24rem] md:w-[32rem] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index, // decrease z-index for the cards that are behind
              }}
            >
              <div className="font-normal text-2xl text-neutral-700 dark:text-neutral-200">
                {card.content}
              </div>
              <div>
                <p className="text-neutral-500 text-2xl font-medium dark:text-white">
                  {card.name}
                </p>
                <p className="text-neutral-400 text-2xl font-normal dark:text-neutral-200">
                  {card.designation}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
