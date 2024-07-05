import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./anim";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  animateWithGsapLeft,
  animateWithGsapRight,
  animateWithGsapBottom,
} from "@/app/utils/animation";

export default function index() {
  useGSAP(() => {
    animateWithGsapRight("#profileImg", { x: 0, opacity: 1, duration: 1 });
    animateWithGsapLeft("#phrase1", { x: 0, opacity: 1, duration: 1 });
    animateWithGsapBottom("#aboutme", { y: 0, opacity: 1, duration: 1 });
  }, []);

  const phrase1a =
    "A Digital Creator with over 2.4M followers on Facebook. A Number One tech influencer in Myanmar.";
  const phrase1b = "- Obsession always beats talent.";
  return (
    <div className={styles.container}>
      <div id="aboutme" className={styles.about}>
        <div>
          <h1>About TBH-Labs</h1>
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles.body}>
          <img
            id="profileImg"
            src="/tbhlabs.jpg"
            height={10}
            width={300}
            alt="profileImg"
            style={{ opacity: 0 }}
          />
          <p>
            {phrase1a.split(" ").map((word, index) => {
              return (
                <span id="phrase1" className={styles.mask}>
                  <span key={index}>{word}</span>
                </span>
              );
            })}
            <br />
            <br />
            {phrase1b.split(" ").map((word, index) => {
              return (
                <span id="phrase1" className={styles.submask}>
                  <span key={index}>{word}</span>
                </span>
              );
            })}
          </p>
        </div>
        {/* <div>Hello</div> */}
      </div>
    </div>
  );
}

export const animateWithGsap = (
  target: gsap.TweenTarget,
  animationProps: gsap.TweenVars,
  scrollProps: any
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
