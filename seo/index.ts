interface MetaTags {
  title: string;
  description: string;
  keywords: string[];
}

export function generateMetaTags(words: string[]): MetaTags {
  const title = words.join(" | "); // Join words with pipe character for title
  const description = `Discover more about ${words.join(", ")}.`; // Create a description based on the words
  const uniqueWordsSet = new Set(words);
  const keywords = Array.from(uniqueWordsSet); // Convert set to array

  return { title, description, keywords };
}
