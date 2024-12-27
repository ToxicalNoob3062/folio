import { Article } from "@/data/routes";

export default function ArticleLink({ title, summary, date }: Article) {
  return (
    <div className="p-6 mx-4 border-b border-writing-primary text-writing-primary">
      <h2 className="font-semibold text-writing-lining text-xl tracking-widest mb-4">
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
        <p className="font-medium text-lg">{summary}</p>
      </div>
    </div>
  );
}
