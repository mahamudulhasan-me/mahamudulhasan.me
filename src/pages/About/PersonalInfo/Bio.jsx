import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Bio = () => {
  return (
    <>
      <article className="bg-inherit">
        <SyntaxHighlighter
          language="javascript"
          style={atelierLakesideDark}
          customStyle={customTheme}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </article>
    </>
  );
};

export default Bio;
