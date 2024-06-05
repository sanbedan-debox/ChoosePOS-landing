// OPT HERO ,HERO2

import React, { FC, useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
}

const Typewriter: FC<TypewriterProps> = ({
  words,
  typeSpeed = 100,
  backSpeed = 80,
  loop = true,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const typingSpeed = isDeleting ? backSpeed : typeSpeed;
    const timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typeSpeed, backSpeed]);

  return <span>{text}</span>;
};

export default Typewriter;
