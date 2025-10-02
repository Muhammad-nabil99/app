/* eslint-disable react/prop-types */
export const CardSkeletonLoader = ({ numCards }) => {
  const cards = Array.from({ length: numCards });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {cards.map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 animate-pulse border border-gray-200"
        >
          {/* Image placeholder */}
          <div className="h-40 bg-gray-200 rounded-md mb-4"></div>

          {/* Title placeholder */}
          <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-3"></div>

          {/* Text line placeholders */}
          <div className="h-4 bg-gray-200 rounded-md w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md w-4/5"></div>
        </div>
      ))}
    </div>
  );
};
