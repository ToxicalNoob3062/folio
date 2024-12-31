import { Article } from "@/extras/types";

export default function ArticleLink({ title, summary, date, link }: Article) {
  return (
    <div className=" pt-8 border-b border-writing-primary text-writing-primary">
      <h2 className="font-bold text-writing-lining text-xl tracking-widest mb-4">
        {date}
      </h2>
      <div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="font-bold block text-3xl mb-8 tracking-wide"
        >
          {title}
        </a>
        <p className="font-medium text-lg mb-14 tracking-wide">{summary}</p>
      </div>
    </div>
  );
}
