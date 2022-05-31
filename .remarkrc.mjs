import remarkRetext from "remark-retext";
import retextSentenceSpacing from "retext-sentence-spacing";
import retextEnglish from "retext-english";
import unified from "unified";

const config = {
  plugins: [
    // Load retext linters to lint English.
    [
      // Parse the Markdown as English using retext.
      remarkRetext,
      unified().use(retextEnglish).use(retextSentenceSpacing),
    ],
  ],
};
export default config;
