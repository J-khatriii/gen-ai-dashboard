import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setResults, setError } from '../store/querySlice';

const MOCK_DATA = {
  "Show me sales trends for the last quarter": {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  },
  "What are our top performing products?": {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [
      {
        label: 'Revenue',
        data: [45000, 38000, 32000, 28000, 25000],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  },
  "Compare customer satisfaction across regions": {
    labels: ['North', 'South', 'East', 'West', 'Central'],
    datasets: [
      {
        label: 'Satisfaction Score',
        data: [4.5, 4.2, 4.8, 4.3, 4.6],
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  },
  "Analyze revenue growth by department": {
    labels: ['Sales', 'Marketing', 'Engineering', 'Operations', 'Finance'],
    datasets: [
      {
        label: 'Growth Rate (%)',
        data: [15, 12, 8, 10, 14],
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  },
  "What's the customer churn rate?": {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Churn Rate (%)',
        data: [5.2, 4.8, 4.5, 4.2],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  }
};

const ResultsDisplay = () => {
  const dispatch = useDispatch();
  const { isProcessing, results, error, currentQuery } = useSelector((state) => state.query);

  useEffect(() => {
    if (isProcessing) {
      const timer = setTimeout(() => {
        if (Math.random() < 0.9) {
          const mockResult = MOCK_DATA[currentQuery] || MOCK_DATA["Show me sales trends for the last quarter"];
          dispatch(setResults(mockResult));
        } else {
          dispatch(setError('Failed to process query. Please try again.'));
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isProcessing, dispatch, currentQuery]);

  if (isProcessing) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <p className="mt-4 text-gray-600">Processing your query...</p>
        <p className="text-sm text-gray-500">This may take a few seconds</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="bg-red-50 rounded-full p-4 mb-4">
          <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Error Processing Query</h3>
        <p className="text-gray-500 text-center max-w-md">{error}</p>
        <button
          onClick={() => dispatch(setError(null))}
          className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="bg-gray-50 rounded-full p-4 mb-4">
          <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Results Yet</h3>
        <p className="text-gray-500 text-center max-w-md">
          Submit a query to see data visualization and insights
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Query Results</h2>
          <p className="text-sm text-gray-500 mt-1">{results.datasets[0].label}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-96">
        <div className="h-full flex items-center justify-center">
          <div className="w-full">
            <div className="space-y-3">
              {results.datasets[0].data.map((value, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-24 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">{results.labels[index]}</div>
                  <div className="flex-1">
                    <div 
                      className="h-8 rounded-full transition-all duration-500 group-hover:opacity-80"
                      style={{ 
                        width: `${(value / Math.max(...results.datasets[0].data)) * 100}%`,
                        backgroundColor: results.datasets[0].backgroundColor,
                        borderColor: results.datasets[0].borderColor,
                        borderWidth: '1px',
                        borderStyle: 'solid'
                      }}
                    ></div>
                  </div>
                  <div className="w-24 text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {typeof value === 'number' && value % 1 !== 0 
                      ? `${value.toFixed(1)}%`
                      : typeof value === 'number'
                      ? `$${value.toLocaleString()}`
                      : value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsDisplay; 