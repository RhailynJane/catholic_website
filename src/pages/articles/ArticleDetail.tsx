import { useParams, Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import RichTextRenderer from "../../components/ui/RichTextRenderer";
import Spinner from "../../components/ui/Spinner";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = useQuery(api.articles.getBySlug, { slug: slug! });

  if (article === undefined) return <Spinner />;
  if (!article) return (
    <div className="text-center py-20">
      <p className="text-stone-400 font-sans text-sm">Article not found.</p>
      <Link to="/information" className="btn-outline mt-6 inline-block">Back to Articles</Link>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link to="/information" className="text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-700 font-sans transition-colors">
        ← Catholic Information
      </Link>

      {/* Header */}
      <div className="mt-8 pb-8 border-b border-stone-200">
        {article.category && (
          <p className="text-[9px] tracking-[0.5em] uppercase text-stone-400 font-sans mb-3">{article.category}</p>
        )}
        <h1 className="font-serif text-5xl text-stone-900 font-light italic leading-tight">{article.title}</h1>
        {article.summary && (
          <p className="mt-4 text-stone-500 font-sans text-base leading-relaxed">{article.summary}</p>
        )}
        <div className="mt-6 h-px w-12 bg-catholic-gold" />
      </div>

      <div className="mt-8 prose-catholic">
        <RichTextRenderer content={article.content} />
      </div>
    </div>
  );
}
