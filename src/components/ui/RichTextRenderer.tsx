import DOMPurify from "dompurify";

interface Props {
  content: string;
  className?: string;
}

export default function RichTextRenderer({ content, className = "" }: Props) {
  const clean = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [
      "p", "br", "strong", "em", "u", "s", "ul", "ol", "li",
      "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "a",
      "hr", "div", "span", "table", "thead", "tbody", "tr", "th", "td",
      "sup", "sub",
    ],
    ALLOWED_ATTR: ["href", "target", "rel", "class"],
  });

  return (
    <div
      className={`prose-catholic ${className}`}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
