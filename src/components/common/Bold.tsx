import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  txt: string;
}

export default function Text({ txt, ...props }: TextProps) {
  const parseText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g); // Split text by **bold** markers
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={index} className="font-semibold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return <p {...props}>{parseText(txt)}</p>;
}
