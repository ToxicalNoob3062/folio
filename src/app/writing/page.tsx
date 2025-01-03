"use client";
import Intro from "@/components/common/Intro";
import { useCompletion } from "@/context/CompletionContext";
import { easeIn, motion } from "framer-motion";
import { Article } from "@/extras/types";
import ArticleLink from "@/components/writing/Article";
import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "@/extras/queries";

export default function Writing() {
  const { completion } = useCompletion();
  const { data: articles } = useQuery<Article[]>({
    queryKey: ["articles"],
    queryFn: fetchAll("articles"),
    staleTime: Infinity,
  });
  return (
    <div className="min-h-screen flex flex-col items-center p-4 xs:p-6 sm:p-8 lg:p-10">
      <div className="flex-grow flex flex-col items-start">
        {completion && (
          <Intro
            heading={"My writing"}
            content="I love sharing my experiences, thoughts, and ideas, especially about **technology**. I often discuss **industry trends**, debate **hot topics**, and review **new tech**, sharing my personal **insights** and **user experiences.**"
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
            {articles?.map((article) => (
              <ArticleLink key={article.id} {...article} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
