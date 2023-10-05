"use client";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import styles from "./Screenshot.module.scss";

interface Props {
  imgSrc: string;
  full?: boolean;
}

export default function Screenshot({ imgSrc, full }: Props) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["end start", "start end"],
  });

  useEffect(() => {
    const handleScroll = () => {
      const maxOffset = 60;
      const parallaxOffset = Math.min(
        scrollYProgress.get() * maxOffset,
        maxOffset
      );

      if (innerRef.current) {
        innerRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYProgress]);

  const screenshotClass = clsx(styles.screenshot, {
    [styles.full]: full === true,
  });
  return (
    <div className={screenshotClass}>
      <div className={styles.inner} ref={innerRef}>
        <Image src={imgSrc} alt="Screenshot" fill />
      </div>
    </div>
  );
}
