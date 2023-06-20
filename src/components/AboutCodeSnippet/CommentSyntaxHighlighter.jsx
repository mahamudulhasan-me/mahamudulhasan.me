import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CommentSyntaxHighlighter = ({ children, responsiveContent }) => {
  const customTheme = {
    background: "transparent",
    // fontSize: "18px",
    // margin: 0,
  };
  return (
    <article>
      <span className="hidden md:block">
        <SyntaxHighlighter
          language="javascript"
          style={atelierLakesideDark}
          customStyle={customTheme}
          showLineNumbers
        >
          {children}
        </SyntaxHighlighter>
      </span>

      <p className="md:hidden w-full text-justify pr-5">{responsiveContent}</p>
    </article>
  );
};

export default CommentSyntaxHighlighter;
