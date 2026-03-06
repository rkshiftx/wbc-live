export default function Loading() {
  return (
    <div className="py-6 space-y-4">
      {/* Skeleton cards */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-gray-900 rounded-xl p-4 border border-gray-800 animate-pulse"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="h-5 w-16 bg-gray-800 rounded-full" />
            <div className="h-4 w-12 bg-gray-800 rounded" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 bg-gray-800 rounded" />
                <div className="h-4 w-20 bg-gray-800 rounded" />
              </div>
              <div className="h-6 w-8 bg-gray-800 rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 bg-gray-800 rounded" />
                <div className="h-4 w-20 bg-gray-800 rounded" />
              </div>
              <div className="h-6 w-8 bg-gray-800 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
