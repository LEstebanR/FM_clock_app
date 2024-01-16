import { useEffect, useState } from "react";
import { Body, H3 } from "./typography";
import { ArrowPathIcon } from "@heroicons/react/16/solid";

const Phrase = () => {
  const [phrase, setPhrase] = useState<{ content: string; author: string }>();

  const fetchPhrase = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setPhrase({ content: data.content, author: data.author });
  };

  useEffect(() => {
    fetchPhrase();
  }, []);

  return (
    <div className="flex gap-1 justify-around w-full lg:w-1/2 lg:self-start">
      <div className="flex flex-col gap-1 w-5/6">
        <Body>"{phrase?.content}"</Body>
        <H3>{phrase?.author}</H3>
      </div>
      <ArrowPathIcon
        className="h-6 w-8 text-gray-300 cursor-pointer"
        onClick={fetchPhrase}
      />
    </div>
  );
};

export default Phrase;
