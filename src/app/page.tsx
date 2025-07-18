"use client";
import styles from "./page.module.scss";
import Section from "@/components/Section/Section";
import Circle from "@/components/Circle/Circle";
import Brands from "@/components/Brands/Brands";

export default function Home() {
  return (
    <main className={styles.main}>
      <Circle />
      <Section>
        <div className={styles.heading}>
          <h1>I&apos;m Matt, Design Engineer from the UK.</h1>
          <h3>But i live in Bulgaria.</h3>
        </div>
        <div className={styles.heading}>
          <h2>I&apos;ve been designing &amp; developing for over 20 years.</h2>
          <h3>I currently work at Prisma</h3>
        </div>
        <div className={`${styles.heading} ${styles.nomargin}`}>
          <h2>I play football &amp; support my home team LFC.</h2>
          <h3>Additionally i like Snowboarding, hiking and camping.</h3>
        </div>
      </Section>

      <Section>
        <div className={styles.heading}>
          <h2>My current flavour.</h2>
          <h3>And some other stuff i like.</h3>
        </div>
        <div className={styles.lists}>
          <ul>
            <li>next.js</li>
            <li>prisma</li>
            <li>typescript</li>
            <li>postgres</li>
            <li>biome</li>
            <li>motion.dev</li>
            <li>tailwindcss</li>
          </ul>
          <ul>
            <li>stripe</li>
            <li>polar</li>
            <li>radix ui</li>
            <li>shadcn/ui</li>
            <li>tailwind css</li>
            <li>tauri</li>
            <li>electron</li>
            <li>resend</li>
          </ul>
          <ul>
            <li>figma</li>
            <li>sketch</li>
            <li>photoshop</li>
            <li>after effects</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className={styles.heading}>
          <h2>I&apos;ve worked with some amazing brands.</h2>
          <h3>And with amazing people.</h3>
        </div>
        <Brands />
      </Section>

      <Section>
        <div className={styles.heading}>
          <h2>I don&apos;t like social media much.</h2>
          <h3>But you can still find me using it.</h3>
        </div>
        <ul>
          <li>
            <a
              href="https://x.com/uixmat"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Follow me on X
            </a>
          </li>
          <li>
            <a
              href="https://github.com/uixmat"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Vibe with me on GitHub
            </a>
          </li>
        </ul>
      </Section>
      <Section>
        <p>Thanks for coming! 👍</p>
      </Section>
    </main>
  );
}
