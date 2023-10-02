"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./Circle.module.scss";

export default function Circle() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const rotateValue = useTransform(
    scrollYProgress,
    (currentScroll) => currentScroll * 360
  );

  return (
    <>
      <motion.div className={styles.progress} style={{ scaleX: scaleX }} />

      <motion.div className={styles.circle} style={{ rotate: rotateValue }}>
        <div className={styles.inner}>
          <svg viewBox="0 0 150 150">
            <path
              id="textPath"
              d="M 135 75 A 60 60 0 0 1 15 75 A 60 60 0 0 1 135 75"
              fill="none"
            />
            <text
              fontSize="19.6"
              fill="var(--color-quartenary)"
              letterSpacing="2"
              fontWeight="bold"
            >
              <textPath xlinkHref="#textPath" startOffset="0">
                &nbsp;scroll&nbsp;•&nbsp;scroll&nbsp;•&nbsp;uixmat&nbsp;•&nbsp;
              </textPath>
            </text>
          </svg>
        </div>
      </motion.div>
    </>
  );
}
