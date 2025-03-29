import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitQuery } from '../store/querySlice';

const SUGGESTED_QUERIES = [
  "Show me sales trends for the last quarter",
  "What are our top performing products?",
  "Compare customer satisfaction across regions",
  "Analyze revenue growth by department",
  "What's the customer churn rate?"
];

const QueryInput = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(submitQuery(query));
      setQuery('');
      setShowSuggestions(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Ask Your Question</h2>
        <div className="flex items-center text-sm text-gray-500">
          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>AI-powered insights</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="relative">
            <textarea
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Ask a question about your data..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm"
              rows="3"
            />
            <div className="absolute right-3 top-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
          {showSuggestions && query && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
              {SUGGESTED_QUERIES
                .filter(suggestion => 
                  suggestion.toLowerCase().includes(query.toLowerCase())
                )
                .map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center"
                    onClick={() => {
                      setQuery(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {suggestion}
                  </button>
                ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Try asking about sales, products, or customer data
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Submit Query
          </button>
        </div>
      </form>
    </div>
  );
}

export default QueryInput; 