import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Loader } from "lucide-react";

export default function AdminImages() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    message: string;
    updated: number;
    failed: number;
    total: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [individualSaint, setIndividualSaint] = useState("");
  const [individualLoading, setIndividualLoading] = useState(false);

  const fetchSaintImagesAction = useAction(api.fetchSaintImages.fetchSaintImages);
  const updateSaintImageAction = useAction(api.fetchSaintImages.updateSaintImage);

  const handleFetchAll = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const result = await fetchSaintImagesAction();
      setResult(result);
    } catch (err) {
      setError((err as Error).message || "Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateIndividual = async () => {
    if (!individualSaint.trim()) {
      setError("Please enter a saint name");
      return;
    }

    setIndividualLoading(true);
    setError(null);
    try {
      const result = await updateSaintImageAction({
        saintName: individualSaint.trim(),
      });
      if (result.success) {
        setResult({
          message: `✓ ${result.message}`,
          updated: 1,
          failed: 0,
          total: 1,
        });
        setIndividualSaint("");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError((err as Error).message || "Failed to update image");
    } finally {
      setIndividualLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* All Saints */}
      <div className="feature-card border-l-4 border-primary-600">
        <h3 className="font-sans font-bold text-lg text-accent-500 mb-4">
          Fetch Images for All Saints
        </h3>
        <p className="text-sm text-accent-400 mb-4 font-sans">
          Automatically fetch images from Wikimedia Commons for saints that don't have images yet.
          This may take a few minutes for all 365+ saints.
        </p>

        <button
          onClick={handleFetchAll}
          disabled={loading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader size={16} className="animate-spin" />
              Fetching images...
            </>
          ) : (
            "Start Batch Image Fetch"
          )}
        </button>

        {result && (
          <div className="mt-4 p-4 bg-accent-50 rounded border border-accent-100">
            <p className="font-sans font-semibold text-accent-500 mb-2">
              {result.message}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-sans text-accent-400">
              <div>
                <span className="font-semibold">Updated:</span> {result.updated}
              </div>
              <div>
                <span className="font-semibold">Failed:</span> {result.failed}
              </div>
              <div className="col-span-2">
                <span className="font-semibold">Total:</span> {result.total}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Individual Saint */}
      <div className="feature-card border-l-4 border-primary-100">
        <h3 className="font-sans font-bold text-lg text-accent-500 mb-4">
          Fetch Image for Specific Saint
        </h3>
        <p className="text-sm text-accent-400 mb-4 font-sans">
          Enter a saint's name exactly as it appears in the database.
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            value={individualSaint}
            onChange={(e) => {
              setIndividualSaint(e.target.value);
              setError(null);
            }}
            placeholder="e.g., Thomas Aquinas"
            className="flex-1 border border-accent-100 px-3 py-2 text-sm font-sans focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white rounded shadow-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUpdateIndividual();
              }
            }}
          />
          <button
            onClick={handleUpdateIndividual}
            disabled={individualLoading}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {individualLoading ? (
              <Loader size={16} className="animate-spin" />
            ) : (
              "Fetch"
            )}
          </button>
        </div>

        {result && result.updated === 1 && (
          <div className="mt-4 p-4 bg-accent-50 rounded border border-accent-100 text-sm font-sans text-accent-500">
            {result.message}
          </div>
        )}
      </div>

      {error && (
        <div className="p-4 bg-red-50 rounded border border-red-200 text-red-700 font-sans text-sm">
          <span className="font-semibold">Error:</span> {error}
        </div>
      )}

      {/* Info Box */}
      <div className="p-4 bg-primary-50 rounded border border-primary-100 text-sm font-sans text-primary-700">
        <p className="font-semibold mb-2">ℹ️ How This Works</p>
        <ul className="space-y-1 text-xs">
          <li>✓ Searches Wikimedia Commons for public domain saint images</li>
          <li>✓ Only updates saints without existing images</li>
          <li>✓ Uses curated list of 50+ high-quality images first</li>
          <li>✓ Rate-limited to 100ms between requests</li>
          <li>✓ Safe to run multiple times</li>
        </ul>
      </div>
    </div>
  );
}
