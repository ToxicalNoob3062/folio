import { Article } from "@/extras/types";

export default function ArticleLink({ title, summary, date }: Article) {
  return (
    <div className="py-6 mx-4 border-b border-writing-primary text-writing-primary">
      <h2 className="font-semibold text-writing-lining text-xl tracking-widest my-4">
        {date}
      </h2>
      <div>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="font-bold block text-3xl mb-4"
        >
          {title}
        </a>
        <p className="font-medium text-lg mb-14">{summary}</p>
      </div>
    </div>
  );
}
