export default function BookFormSkeleton() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-6">
        {/* Title Field Skeleton */}
        <div>
          <div className="h-5 bg-gray-200 rounded w-1/4 mb-2 animate-pulse" />
          <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
        </div>

        {/* Author Field Skeleton */}
        <div>
          <div className="h-5 bg-gray-200 rounded w-1/4 mb-2 animate-pulse" />
          <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
        </div>

        {/* Description Field Skeleton */}
        <div>
          <div className="h-5 bg-gray-200 rounded w-1/3 mb-2 animate-pulse" />
          <div className="h-32 bg-gray-200 rounded w-full animate-pulse" />
        </div>

        {/* File Upload Skeleton */}
        <div>
          <div className="h-5 bg-gray-200 rounded w-1/4 mb-2 animate-pulse" />
          <div className="h-24 bg-gray-200 rounded w-full flex items-center justify-center animate-pulse">
            <div className="w-12 h-12 text-gray-400">
              <svg
                className="animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button Skeleton */}
        <div className="pt-4">
          <div className="h-12 bg-gray-200 rounded w-full animate-pulse" />
        </div>
      </div>
    </div>
  );
} 