import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

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
