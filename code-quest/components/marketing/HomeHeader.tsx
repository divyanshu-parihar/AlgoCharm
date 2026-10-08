"use client";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Braces, Menu, X } from "lucide-react";
import Link from "next/link";
import StartLearning from "./StartLearning";
import styles from "@/app/home.module.css";
export default function HomeHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="AlgoCharm home">
          <span className={styles.brandMark} aria-hidden="true">
            <Braces size={21} />
          </span>
          AlgoCharm
        </Link>
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <a href="#learning-path">Learning path</a>
          <a href="#workflow">CLI</a>
          <Link href="/pricing">Pricing</Link>
          <a href="#questions">FAQs</a>
        </nav>
        <div className={styles.headerActions}>
          <SignedOut>
            <SignInButton mode="modal">
              <button className={styles.signIn}>Sign in</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" className={styles.signIn}>
              Dashboard
            </Link>
            <UserButton />
          </SignedIn>
          <div className={styles.headerStart}>
            <StartLearning className={styles.smallButton} />
          </div>
          <button
            className={styles.mobileToggle}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className={styles.mobileNav}
          aria-label="Mobile navigation"
          onClick={() => setOpen(false)}
        >
          <a href="#learning-path">Learning path</a>
          <a href="#workflow">CLI</a>
          <Link href="/pricing">Pricing</Link>
          <a href="#questions">FAQs</a>
          <StartLearning className={styles.smallButton} />
        </nav>
      )}
    </header>
  );
}
