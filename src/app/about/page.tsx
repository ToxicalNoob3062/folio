"use client";
import Intro from "@/components/common/Intro";
import ScrollIndicator from "@/components/common/Scroll";
import { useCompletion } from "@/context/CompletionContext";

export default function About() {
  const { completion } = useCompletion();
  return (
    <div className="">
      <div className="min-h-screen flex flex-col items-center gap-8">
        {completion && (
          <Intro
            heading={"About me"}
            content="I'm a **developer**, **designer** and **linguist** who has been building for the web in some capacity since 2001. I specialise in accessibility, performance and usability without sacrificing creativity."
            direct
          />
        )}
        <ScrollIndicator delay={1} />
      </div>
    </div>
  );
}
