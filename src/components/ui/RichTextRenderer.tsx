import DOMPurify from "dompurify";

interface Props {
  content: string;
  className?: string;
}

export default function RichTextRenderer({ content, className = "" }: Props) {
  // Check if content is HTML (contains tags) or plain text
  const isHtml = /<[a-z][\s\S]*>/i.test(content);
  
  if (isHtml) {
    // Render HTML content safely
    const clean = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        "p", "br", "strong", "em", "u", "s", "ul", "ol", "li",
        "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "a",
        "hr", "div", "span", "table", "thead", "tbody", "tr", "th", "td",
        "sup", "sub",
      ],
      ALLOWED_ATTR: ["href", "target", "rel", "class", "id"],
    });

    return (
      <div
        className={`prose-catholic ${className}`}
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    );
  }
  
  // Render plain text with preserved line breaks
  return (
    <div className={`prose-catholic whitespace-pre-wrap break-words ${className}`}>
      {content}
    </div>
  );
}
