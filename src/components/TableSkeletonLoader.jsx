/* eslint-disable react/prop-types */
export const TableSkeletonLoader = ({ numRows = 5, numCols = 4 }) => {
  const headerCols = Array.from({ length: numCols });
  const rows = Array.from({ length: numRows });

  return (
    <div className="w-full overflow-x-auto p-4 bg-white rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headerCols.map((_, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {/* Placeholder for table header */}
                <div className="h-4 bg-gray-200 rounded-md animate-pulse w-3/4"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((_, rowIndex) => (
            <tr key={rowIndex}>
              {headerCols.map((_, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                  {/* Placeholder for table cell content */}
                  <div className="h-4 bg-gray-200 rounded-md animate-pulse w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
