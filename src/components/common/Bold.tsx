import React from "react";

export default function Text({ txt }: { txt: string }) {
  const parseText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g); // Split text by **bold** markers
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={index} className="text-lg font-semibold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return <>{parseText(txt)}</>;
}
