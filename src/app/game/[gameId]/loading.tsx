export default function GameLoading() {
  return (
    <div className="py-6 space-y-6">
      {/* Scoreboard skeleton */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 animate-pulse">
        <div className="flex justify-center mb-4">
          <div className="h-7 w-20 bg-gray-800 rounded-full" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-gray-800 rounded" />
            <div className="space-y-1">
              <div className="h-5 w-16 bg-gray-800 rounded" />
              <div className="h-3 w-10 bg-gray-800 rounded" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-10 bg-gray-800 rounded" />
            <div className="h-6 w-4 bg-gray-800 rounded" />
            <div className="h-12 w-10 bg-gray-800 rounded" />
          </div>
          <div className="flex items-center gap-2 flex-row-reverse">
            <div className="h-10 w-10 bg-gray-800 rounded" />
            <div className="space-y-1 text-right">
              <div className="h-5 w-16 bg-gray-800 rounded" />
              <div className="h-3 w-10 bg-gray-800 rounded ml-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Share buttons skeleton */}
      <div className="flex gap-3">
        <div className="flex-1 h-12 bg-gray-900 rounded-xl animate-pulse" />
        <div className="flex-1 h-12 bg-gray-900 rounded-xl animate-pulse" />
      </div>

      {/* Events skeleton */}
      <div className="space-y-2 animate-pulse">
        <div className="h-4 w-24 bg-gray-800 rounded" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
            <div className="h-4 w-10 bg-gray-800 rounded" />
            <div className="flex-1 h-4 bg-gray-800 rounded" />
            <div className="h-4 w-12 bg-gray-800 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
