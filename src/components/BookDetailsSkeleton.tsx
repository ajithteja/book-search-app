export default function BookDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Skeleton - Fixed */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/4]">
                <div className="absolute inset-2 bg-gray-200 animate-pulse">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 text-gray-400">
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
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col h-full">
              {/* Fixed Header Section */}
              <div className="flex-none">
                <div className="h-10 bg-gray-200 rounded-md w-3/4 animate-pulse mb-4" />
                <div className="h-6 bg-gray-200 rounded-md w-1/2 animate-pulse mb-6" />
              </div>

              {/* Scrollable Description Section */}
              <div className="flex-1 overflow-y-auto min-h-0 max-h-[calc(100vh-24rem)]">
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded-md w-4/6 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded-md w-4/6 animate-pulse" />
                </div>
              </div>

              {/* Fixed Footer Section */}
              <div className="flex-none pt-6 mt-6 border-t border-gray-200">
                <div className="h-12 bg-gray-200 rounded-md w-32 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
