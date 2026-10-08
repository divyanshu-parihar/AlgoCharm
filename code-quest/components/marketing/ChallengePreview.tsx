"use client";
import { useState } from "react";
import { Braces, Check, Lightbulb, RotateCcw } from "lucide-react";
import styles from "@/app/home.module.css";
const examples = {
  TypeScript: `function twoSum(nums: number[], target: number) {\n  const seen = new Map<number, number>();\n\n  for (let i = 0; i < nums.length; i++) {\n    const match = seen.get(target - nums[i]);\n    if (match !== undefined) return [match, i];\n    seen.set(nums[i], i);\n  }\n  return [];\n}`,
  Go: `func twoSum(nums []int, target int) []int {\n  seen := make(map[int]int)\n\n  for i, n := range nums {\n    if match, ok := seen[target - n]; ok {\n      return []int{match, i}\n    }\n    seen[n] = i\n  }\n  return nil\n}`,
  "C++": `vector<int> twoSum(vector<int>& nums, int target) {\n  unordered_map<int, int> seen;\n\n  for (int i = 0; i < nums.size(); ++i) {\n    if (seen.count(target - nums[i])) {\n      return {seen[target - nums[i]], i};\n    }\n    seen[nums[i]] = i;\n  }\n  return {};\n}`,
};
const hints = [
  "For each number, ask: what other number would add up to the target?",
  "Store numbers you have already visited, together with their indices. Look up the complement as you go.",
];
export default function ChallengePreview() {
  const [language, setLanguage] = useState<keyof typeof examples>("TypeScript");
  const [hint, setHint] = useState(0);
  const [solution, setSolution] = useState(false);
  return (
    <div className={styles.previewWrap}>
      <div className={styles.preview}>
        <div className={styles.previewTop}>
          <span>
            <Braces size={17} aria-hidden="true" />
            Challenge preview
          </span>
          <span className={styles.previewLabel}>Arrays & strings</span>
        </div>
        <div className={styles.challengeBody}>
          <div className={styles.challengeHeading}>
            <h2>Find the perfect pair</h2>
            <span className={styles.difficulty}>Foundations</span>
          </div>
          <p>
            Find two numbers that add up to the target. Return their indices.
          </p>
          <div
            className={styles.arrayVisual}
            aria-label="Numbers 2, 7, 11, 15. Two and seven add up to the target, nine."
          >
            {[2, 7, 11, 15].map((n, i) => (
              <div
                key={n}
                className={i < 2 ? styles.selectedCell : styles.arrayCell}
              >
                <span>{n}</span>
                <small>{i}</small>
              </div>
            ))}
            <div className={styles.target}>
              <small>Target</small>
              <strong>9</strong>
            </div>
          </div>
          <div
            className={styles.languageTabs}
            role="tablist"
            aria-label="Example programming language"
          >
            {(Object.keys(examples) as (keyof typeof examples)[]).map(
              (lang) => (
                <button
                  key={lang}
                  id={`tab-${lang}`}
                  role="tab"
                  aria-controls="challenge-example"
                  aria-selected={language === lang}
                  onClick={() => setLanguage(lang)}
                >
                  {lang}
                </button>
              ),
            )}
          </div>
          <div
            id="challenge-example"
            role="tabpanel"
            aria-labelledby={`tab-${language}`}
            className={styles.codePanel}
          >
            {solution ? (
              <pre>
                <code>{examples[language]}</code>
              </pre>
            ) : (
              <>
                <div className={styles.codeLine}>
                  <span>1</span>
                  <code className={styles.codeComment}>
                    {"// What pattern would you use?"}
                  </code>
                </div>
                <div className={styles.codeLine}>
                  <span>2</span>
                  <code>
                    {language === "TypeScript"
                      ? "const nums = [2, 7, 11, 15];"
                      : language === "Go"
                        ? "nums := []int{2, 7, 11, 15}"
                        : "vector<int> nums = {2, 7, 11, 15};"}
                  </code>
                </div>
                <div className={styles.codeLine}>
                  <span>3</span>
                  <code>
                    {language === "TypeScript"
                      ? "const target = 9;"
                      : language === "Go"
                        ? "target := 9"
                        : "int target = 9;"}
                  </code>
                </div>
                <div className={styles.codeLine}>
                  <span>4</span>
                  <code className={styles.codeComment}>
                    {"// Expected indices: [0, 1]"}
                  </code>
                </div>
              </>
            )}
          </div>
          <div className={styles.hint} aria-live="polite">
            <Lightbulb size={18} aria-hidden="true" />
            <p>
              {hint
                ? hints[hint - 1]
                : "A little direction can unlock a new way of thinking."}
            </p>
          </div>
          <div className={styles.previewActions}>
            <button onClick={() => setHint(hint === 2 ? 0 : hint + 1)}>
              {hint === 2 ? (
                <RotateCcw size={16} aria-hidden="true" />
              ) : (
                <Lightbulb size={16} aria-hidden="true" />
              )}
              {hint === 2
                ? "Reset hints"
                : hint === 1
                  ? "Next hint"
                  : "Show a hint"}
            </button>
            <button onClick={() => setSolution(!solution)}>
              {solution ? "Hide solution" : "View solution"}
            </button>
          </div>
        </div>
        <div className={styles.previewBottom}>
          <span>
            <Check size={15} aria-hidden="true" />
            Learn the reasoning, not just the answer
          </span>
          <span>Interactive example</span>
        </div>
      </div>
      <div className={styles.previewCaption}>
        <span className={styles.smallDot} />A small challenge. A useful pattern.
      </div>
    </div>
  );
}
