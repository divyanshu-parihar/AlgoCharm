import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Code2,
  GitBranch,
  Layers3,
  Terminal,
  MessageCircle,
  Braces,
} from "lucide-react";
import { Manrope } from "next/font/google";
import HomeHeader from "@/components/marketing/HomeHeader";
import ChallengePreview from "@/components/marketing/ChallengePreview";
import StartLearning from "@/components/marketing/StartLearning";
import styles from "./home.module.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-home" });
export const metadata: Metadata = {
  title: "AlgoCharm | Build your algorithm intuition",
  description:
    "Learn data structures and algorithms through story-driven challenges. Practice in Go, TypeScript, and C++ with AlgoCharm, a product of Workbuzz Solutions.",
  alternates: { canonical: "https://www.workbuzz.me/" },
  openGraph: {
    title: "AlgoCharm | Build your algorithm intuition",
    description:
      "A clear path from solving your first challenge to recognizing the patterns behind complex problems.",
    url: "https://www.workbuzz.me/",
    siteName: "AlgoCharm",
    type: "website",
  },
};
const topics = [
  {
    name: "Arrays & strings",
    description: "Find structure in the fundamentals.",
    icon: Braces,
    tags: "Two pointers · Sliding window",
  },
  {
    name: "Linked lists & stacks",
    description: "Work with connections, order, and state.",
    icon: Layers3,
    tags: "Traversal · Fast & slow pointers",
  },
  {
    name: "Trees & graphs",
    description: "Learn to navigate a world of possibilities.",
    icon: GitBranch,
    tags: "Depth-first · Breadth-first search",
  },
  {
    name: "Dynamic programming",
    description: "Turn repeated work into reusable solutions.",
    icon: Code2,
    tags: "Memoization · Tabulation",
  },
];
export default function Home() {
  return (
    <div className={`${styles.home} ${manrope.variable}`}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <HomeHeader />
      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroCopy}>
            <div className={styles.productBadge}>
              <span aria-hidden="true" />A better way to learn DSA
            </div>
            <h1 id="hero-heading">
              Understand the pattern.
              <br />
              Own the solution.
            </h1>
            <p>
              Build algorithm intuition through challenges that tell a story.
              Learn by doing, connect the dots, and become a more confident
              developer.
            </p>
            <div className={styles.heroActions}>
              <StartLearning className={styles.primaryButton} />
              <a href="#learning-path" className={styles.textLink}>
                Explore the learning path{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.heroNote}>
              <Check size={16} aria-hidden="true" />
              Go, TypeScript, and C++
              <span aria-hidden="true" />
              Your pace. Your editor.
            </div>
          </div>
          <ChallengePreview />
        </section>
        <section className={styles.facts} aria-label="Platform highlights">
          <div>
            <span className={styles.factIcon}>
              <Code2 size={21} aria-hidden="true" />
            </span>
            <p>
              <strong>Practice with purpose</strong>
              <span>Challenges from fundamentals to advanced patterns</span>
            </p>
          </div>
          <div>
            <span className={styles.factIcon}>
              <Layers3 size={21} aria-hidden="true" />
            </span>
            <p>
              <strong>A story-driven learning path</strong>
              <span>Make progress through connected modules</span>
            </p>
          </div>
          <div>
            <span className={styles.factIcon}>
              <Terminal size={21} aria-hidden="true" />
            </span>
            <p>
              <strong>Made for your workflow</strong>
              <span>Practice locally with the AlgoCharm CLI</span>
            </p>
          </div>
        </section>
        <section
          id="learning-path"
          className={styles.pathSection}
          aria-labelledby="path-heading"
        >
          <div className={styles.sectionIntro}>
            <span className={styles.sectionIcon}>
              <GitBranch size={25} aria-hidden="true" />
            </span>
            <h2 id="path-heading">
              A learning path.
              <br />
              Not just a problem list.
            </h2>
            <p>
              Start with the essentials and build on what you know. Story
              campaigns give each challenge context, while progress tracking
              helps you see how far you’ve come.
            </p>
            <StartLearning
              className={styles.textLink}
              label="Explore the campaign"
            />
            <div className={styles.pathDetail}>
              <span className={styles.smallDot} />
              <span>Build understanding, one challenge at a time.</span>
            </div>
          </div>
          <div className={styles.curriculum}>
            <p className={styles.curriculumLabel}>
              Your path through the patterns
            </p>
            {topics.map((topic, index) => (
              <div className={styles.topic} key={topic.name}>
                <span className={styles.topicIndex}>{index + 1}</span>
                <div>
                  <h3>{topic.name}</h3>
                  <p>{topic.description}</p>
                  <span className={styles.topicTags}>{topic.tags}</span>
                </div>
                <topic.icon
                  size={22}
                  className={styles.topicIcon}
                  aria-hidden="true"
                />
              </div>
            ))}
            <div className={styles.curriculumFooter}>
              <Check size={16} aria-hidden="true" />A progression from
              foundational concepts to complex reasoning
            </div>
          </div>
        </section>
        <section
          id="workflow"
          className={styles.workflow}
          aria-labelledby="workflow-heading"
        >
          <div
            className={styles.terminal}
            aria-label="Illustrative local coding workflow"
          >
            <div className={styles.terminalBar}>
              <Terminal size={16} aria-hidden="true" />
              <span>Your workspace</span>
              <span className={styles.terminalStatus}>Local practice</span>
            </div>
            <div className={styles.terminalBody}>
              <p className={styles.terminalComment}>
                {"// More thinking. Less context switching."}
              </p>
              <p>
                <span>challenge</span> two-sum.ts
              </p>
              <pre>
                <code>{`function twoSum(nums: number[], target: number) {\n  const seen = new Map<number, number>();\n\n  for (let i = 0; i < nums.length; i++) {\n    const match = seen.get(target - nums[i]);\n    if (match !== undefined) return [match, i];\n    seen.set(nums[i], i);\n  }\n\n  return [];\n}`}</code>
              </pre>
              <div className={styles.terminalResult}>
                <Check size={16} aria-hidden="true" />
                <span>Understand it. Write it. Test it.</span>
              </div>
            </div>
            <div className={styles.terminalFooter}>
              <span>TypeScript</span>
              <span>Example solution</span>
            </div>
          </div>
          <div className={styles.workflowCopy}>
            <span className={styles.workflowIcon}>
              <Terminal size={24} aria-hidden="true" />
            </span>
            <h2 id="workflow-heading">
              Your editor.
              <br />
              Your environment.
              <br />
              Your breakthrough.
            </h2>
            <p>
              Keep the tools you already love. The AlgoCharm CLI connects your
              learning journey with local coding, so you can focus on the
              problem in your own development environment.
            </p>
            <ul>
              <li>
                <Check size={17} aria-hidden="true" />
                Use your preferred editor
              </li>
              <li>
                <Check size={17} aria-hidden="true" />
                Write code in Go, TypeScript, or C++
              </li>
              <li>
                <Check size={17} aria-hidden="true" />
                Run and refine your solutions locally
              </li>
            </ul>
            <Link href="/install" className={styles.lightButton}>
              Get the CLI <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section className={styles.aiSection} aria-labelledby="ai-heading">
          <div className={styles.aiHeading}>
            <span className={styles.sectionIcon}>
              <MessageCircle size={24} aria-hidden="true" />
            </span>
            <div>
              <span className={styles.roadmapBadge}>On our roadmap</span>
              <h2 id="ai-heading">Guidance that helps you think.</h2>
            </div>
          </div>
          <div className={styles.aiCopy}>
            <p>
              We’re working toward AI-assisted tutoring that meets you where you
              are: progressive hints, thoughtful code feedback, and clear
              explanations of complexity.
            </p>
            <p className={styles.aiNote}>
              Our goal is to help you develop the reasoning behind a solution.
              These tutoring features are planned and are not yet available.
            </p>
          </div>
        </section>
        <section
          id="questions"
          className={styles.faqSection}
          aria-labelledby="faq-heading"
        >
          <div>
            <h2 id="faq-heading">
              A few things
              <br />
              you might be wondering.
            </h2>
            <p>
              Have another question?
              <br />
              <a href="mailto:hello@workbuzz.me">Talk to us</a>.
            </p>
          </div>
          <div className={styles.faqList}>
            <details>
              <summary>
                Who is AlgoCharm for?<span aria-hidden="true">+</span>
              </summary>
              <p>
                AlgoCharm is for developers and students who want to build a
                stronger understanding of data structures and algorithms,
                whether they are learning the fundamentals or preparing for
                technical interviews.
              </p>
            </details>
            <details>
              <summary>
                Which programming languages can I use?
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                You can practice in Go, TypeScript, and C++. Use the language
                you know best and focus on the underlying problem-solving
                patterns.
              </p>
            </details>
            <details>
              <summary>
                Can I use my own editor?<span aria-hidden="true">+</span>
              </summary>
              <p>
                Yes. Our CLI is designed for working in your own development
                environment. Visit the{" "}
                <Link href="/install">installation guide</Link> for macOS,
                Linux, and Windows instructions.
              </p>
            </details>
            <details>
              <summary>
                How do I get started?<span aria-hidden="true">+</span>
              </summary>
              <p>
                Create an account or sign in, explore the campaign, and choose
                your first challenge. You can review the{" "}
                <Link href="/pricing">current pricing</Link> before choosing a
                plan.
              </p>
            </details>
            <details>
              <summary>
                Who builds AlgoCharm?<span aria-hidden="true">+</span>
              </summary>
              <p>
                AlgoCharm is operated by Workbuzz Solutions (OPC) Private
                Limited, a company incorporated in India in November 2025 and
                based in Baijnath, Himachal Pradesh. Contact us at{" "}
                <a href="mailto:hello@workbuzz.me">hello@workbuzz.me</a>.
              </p>
            </details>
          </div>
        </section>
        <section className={styles.finalCta} aria-labelledby="start-heading">
          <div>
            <h2 id="start-heading">
              Your next breakthrough
              <br />
              starts with one challenge.
            </h2>
            <p>Bring your curiosity. Build the confidence to solve.</p>
          </div>
          <StartLearning
            className={styles.primaryButton}
            label="Start your learning journey"
          />
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <a href="#" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              <Braces size={21} />
            </span>
            AlgoCharm
          </a>
          <nav aria-label="Footer navigation">
            <Link href="/pricing">Pricing</Link>
            <Link href="/install">CLI guide</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/refund">Refund policy</Link>
          </nav>
          <a href="mailto:hello@workbuzz.me" className={styles.contact}>
            hello@workbuzz.me <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className={styles.footerBottom}>
          <p>A product of Workbuzz Solutions (OPC) Private Limited.</p>
          <p>© {new Date().getFullYear()} Workbuzz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
