"use client";
import styles from "./page.module.scss";
import Section from "@/components/Section/Section";
import Circle from "@/components/Circle/Circle";
import Screenshot from "@/components/Screenshot/Screenshot";
import Brands from "@/components/Brands/Brands";
import Button from "@/components/Button/Button";
import CodePen from "@/components/CodePen/CodePen";

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
          <h3>But i&apos;ve done it professionally since 2008.</h3>
        </div>
        <div className={`${styles.heading} ${styles.nomargin}`}>
          <h2>I play football &amp; support my home team LFC.</h2>
          <h3>Additionally i like Snowboarding, hiking and camping.</h3>
        </div>
      </Section>

      <Section>
        <div className={styles.heading}>
          <h2>I&apos;m currently building</h2>
          <h3>An open-source Next.js boilerplate</h3>
        </div>
        <p>
          I&apos;m currently building in public an open-source Next.js
          boilerplate/SaaS starter kit called{" "}
          <a href="https://firestarta.dev" target="_blank">
            firestarta.dev
          </a>
          . Built from the ground up with Next.js, NextAuth, Prisma, Supabase,
          Shadcn/ui and Tailwind and it&apos;s already packed full of cool
          features. Firestarta has a full OAuth authentication flow with custom
          signin pages, server components and user accounts. I&apos;m building
          itin public and you can follow regular updates both on{" "}
          <a href="https://github.com/uixmat/firestarta" target="_blank">
            GitHub
          </a>{" "}
          and <a href="https://twitter.com/uixmat">Twitter</a>.
        </p>

        <div className={styles.screenshots}>
          <Screenshot imgSrc="/firestarta-0.png" full />
          <Screenshot imgSrc="/firestarta-1.png" />
          <Screenshot imgSrc="/firestarta-2.png" />
        </div>

        <Button href="https://firestarta.dev">Visit firestarta.dev</Button>
      </Section>

      <Section>
        <div className={styles.heading}>
          <h2>Recently i built something.</h2>
          <h3>So i could improve my skills</h3>
        </div>
        <p>
          It&apos;s called{" "}
          <a href="https://nextjobs.dev" rel="follow" target="_blank">
            nextjobs.dev
          </a>{" "}
          - I made it during September &apos;03 as a side project after losing
          my previous job. I wanted to make a full-stack web application that
          could both showcase my design and development ability while learning
          some more. It uses my current flavour mentioned below and utilises a
          bunch of Next 13&apos;s awesome new features like edge functions
          together with Prisma&apos;s new Accelerate product.{" "}
        </p>

        <p>
          While i&apos;m searching for a job i&apos;d be happy to give employers
          a tour of the repo!
        </p>

        <div className={styles.screenshots}>
          <Screenshot imgSrc="/nextjobs-screenshot-0.png" full />
          <Screenshot imgSrc="/nextjobs-screenshot-1.png" />
          <Screenshot imgSrc="/nextjobs-screenshot-2.png" />
        </div>

        <Button href="https://nextjobs.dev">Visit nextjobs.dev</Button>
      </Section>

      <Section>
        <div className={styles.heading}>
          <h2>My current flavour.</h2>
          <h3>And some other stuff i like.</h3>
        </div>
        <div className={styles.lists}>
          <ul>
            <li>next.js</li>
            <li>typescript</li>
            <li>scss</li>
            <li>prisma</li>
            <li>mongodb</li>
            <li>framer motion</li>
            <li>storybook</li>
          </ul>
          <ul>
            <li>supabase</li>
            <li>stripe</li>
            <li>lemonsqueezy</li>
            <li>radix ui</li>
            <li>shadcn/ui</li>
            <li>formik</li>
          </ul>
          <ul>
            <li>figma</li>
            <li>framer</li>
            <li>xd</li>
            <li>sketch</li>
            <li>photoshop</li>
            <li>illustrator</li>
            <li>after effects</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className={styles.heading}>
          <h2>Some fun stuff.</h2>
          <h3>I like to create on CodePen</h3>
        </div>
        <ul className={styles.pens}>
          <li>
            <CodePen author="uixmat" slug="XWovXvg" />
          </li>
          <li>
            <CodePen author="uixmat" slug="rNodjee" />
          </li>
          <li>
            <CodePen author="uixmat" slug="EZvEPp" />
          </li>
          <li>
            <CodePen author="uixmat" slug="ExePjZv" />
          </li>
        </ul>
        <p>See more on CodePen...</p>
        <Button href="https://codepen.io/uixmat" external>
          CodePen
        </Button>
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
              Judge me on GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/uixmat"
              target="_blank"
              rel="nofollow noreferrer"
            >
              View my past on LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/uixmat"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Create with me on CodePen
            </a>
          </li>
        </ul>
        <Button href="/downloads/uixmat-resume.pdf" resume>
          Download my resume
        </Button>
      </Section>
      <Section>
        <p>Thanks for coming! 👍</p>
      </Section>
    </main>
  );
}
