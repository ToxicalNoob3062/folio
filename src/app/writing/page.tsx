"use client";
import Intro from "@/components/common/Intro";
import { useCompletion } from "@/context/CompletionContext";
import { easeIn, motion } from "framer-motion";
import { Article } from "@/extras/routes";
import ArticleLink from "@/components/writing/Article";

const database: Article[] = [
  {
    date: "FEB 28 2021",
    title: "First Post written by me",
    summary:
      "This is my first post that I am writing to show how intelligent i am and i am grateful for my knowledge and also try to remain happy with what I have.",
  },
  {
    date: "MAR 01 2021",
    title: "Second Post written by me",
    summary:
      "This is my second post that I am writing to show how intelligent i am and i am grateful for my knowledge and also try to remain happy with what I have.",
  },
  {
    date: "MAR 02 2021",
    title: "Third Post written by me",
    summary:
      "This is my third post that I am writing to show how intelligent i am and i am grateful for my knowledge and also try to remain happy with what I have.",
  },
  {
    date: "MAR 03 2021",
    title: "Fourth Post written by me",
    summary:
      "This is my fourth post that I am writing to show how intelligent i am and i am grateful for my knowledge and also try to remain happy with what I have.",
  },
  {
    date: "MAR 04 2021",
    title: "Fifth Post written by me",
    summary:
      "This is my fifth post that I am writing to show how intelligent i am and i am grateful for my knowledge and also try to remain happy with what I have.",
  },
];

export default function Writing() {
  const { completion } = useCompletion();
  return (
    <div className="min-h-screen">
      {completion && (
        <Intro
          heading={"My writing"}
          content="Here you'll find my **writing** on topics ranging from coding and the web industry, to **linguistics** and natural language **processing** – there's also a handy RSS feed, if you'd prefer to subscribe. If you'd like to chat about anything I've written, say hi on Bluesky."
          lining
          direct
        />
      )}
      {completion && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, easeIn }}
          className="mt-28"
        >
          {database.map((article, index) => (
            <ArticleLink key={index} {...article} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
