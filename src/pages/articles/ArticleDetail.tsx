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
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Link to="/information" className="text-[10px] tracking-[0.3em] uppercase text-accent-300 hover:text-primary-600 font-sans transition-colors inline-flex items-center gap-2 font-semibold">
          ← Back to Articles
        </Link>
      </div>

      {/* Wavy gradient background section */}
      <div className="wavy-gradient py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="pb-8">
            <div className="mb-6 text-4xl font-sans">✦</div>
            {article.category && (
              <p className="text-[9px] tracking-[0.5em] uppercase text-primary-600 font-sans mb-3 font-semibold">{article.category}</p>
            )}
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-accent-500 leading-tight">{article.title}</h1>
            {article.summary && (
              <p className="mt-6 text-accent-400 font-sans text-lg leading-relaxed">{article.summary}</p>
            )}
          </div>

          <div className="mt-12 prose-catholic">
            <RichTextRenderer content={article.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
