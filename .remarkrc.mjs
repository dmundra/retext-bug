import remarkRetext from "remark-retext";
import retextSentenceSpacing from "retext-sentence-spacing"
import unified from "unified";

const config = {
  plugins: [
    // Load retext linters to lint English.
    [
      // Parse the Markdown as English using retext.
      remarkRetext,
      unified()
        // Load linters.
        .use(retextSentenceSpacing),
    ],
  ],
};
export default config;
