import { Article } from "@/extras/types";

export default function ArticleLink({ title, summary, date, link }: Article) {
  return (
    <div className=" pt-8  border-b border-writing-primary text-writing-primary max-w-screen-xl lg:flex justify-between">
      <h2 className="h-fit font-bold text-writing-lining text-lg xs:text-xl tracking-widest mb-4 lg:w-1/3 lg:flex items-center">
        {date}
        <span className="hidden w-2/6 ml-3 lg:inline-block h-1 bg-writing-highlight"></span>
      </h2>
      <div className="lg:w-4/6 h-full">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="font-bold block text-xl xs:text-2xl  mb-8 tracking-wide"
        >
          {title}
        </a>
        <p className="font-medium text-base xs:text-lg mb-14 tracking-wide">
          {summary}
        </p>
      </div>
    </div>
  );
}
