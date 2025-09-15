"use client";
import styles from "./page.module.scss";
import Section from "@/components/Section/Section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section>
        <div className={styles.heading}>
          <h1>I&apos;m Matt, FE Design Engineer from the UK.</h1>
          <h3>But i live in Bulgaria.</h3>
        </div>
        <div className={styles.heading}>
          <h2>I&apos;ve been designing &amp; developing for over 20 years.</h2>
          <h3>
            I currently work at{" "}
            <a href="https://prisma.io" rel="nofollow" target="_blank">
              Prisma
            </a>
            .
          </h3>
        </div>
        <div className={`${styles.nomargin}`}>
          <p>
            When i&apos;m not working on my own projects - private or OSS; you
            can find me travelling at high-speeds down a mountain. I&apos;m an
            avid enduro mtb rider and back country snowboarder. I value my time
            away from the computer and semi-disconnected from the outside world.
            I spend time with my wife, dog and close friends as much as
            possible.
          </p>

          <p>
            Coming from the MMA side of design and web development; I&apos;ve
            honed my skillsets to be able to deliver high-quality work. I
            thoiroughly believe good user experience, beautiful user interfaces
            and maintainable code all go hand in hand.
          </p>

          <p>
            <small>
              I relish the opportunity to grow, improve and help others around
              me do the same.
            </small>
          </p>
        </div>
      </Section>

      <Section border={false}>
        <div className={styles.heading}>
          <h2>My current flavour.</h2>
          <h3>And some other stuff i like.</h3>
        </div>
        <div className={styles.lists}>
          <ul>
            <li>next.js, typescript</li>
            <li>prisma, postgres</li>
            <li>supabase</li>
            <li>biome</li>
            <li>motion.dev</li>
            <li>tailwindcss</li>
            <li>linear</li>
            <li>github actions</li>
          </ul>
          <ul>
            <li>polar, resend</li>
            <li>radix, shadcn</li>
            <li>tailwind, css</li>
            <li>tauri, electron</li>
            <li>vercel</li>
            <li>remix, vite</li>
            <li>sentry, grafana</li>
            <li>figma, sketch</li>
            <li>after effects</li>
          </ul>
          <ul>
            <li>snowboards</li>
            <li>mountain bikes</li>
            <li>liverpool fc</li>
          </ul>
        </div>
      </Section>
    </main>
  );
}
