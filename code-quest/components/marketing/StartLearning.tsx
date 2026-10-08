"use client";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function StartLearning({
  className,
  label = "Start learning",
}: {
  className: string;
  label?: string;
}) {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal" forceRedirectUrl="/campaign">
          <button className={className}>
            {label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link href="/campaign" className={className}>
          {label}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </SignedIn>
    </>
  );
}
