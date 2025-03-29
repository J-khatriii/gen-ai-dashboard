import { Provider } from 'react-redux';
import { store } from './store/store';
import QueryInput from './components/QueryInput'
import QueryHistory from './components/QueryHistory'
import ResultsDisplay from './components/ResultsDisplay'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
        </div>

        <div className="relative z-10">
          <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h1 className="text-2xl font-bold text-gray-900">Gen AI Analytics</h1>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    Dashboard
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    Reports
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <QueryInput />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <QueryHistory />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <ResultsDisplay />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Provider>
  )
}

export default App
