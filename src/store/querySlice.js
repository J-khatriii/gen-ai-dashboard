import { createSlice } from '@reduxjs/toolkit';

const loadQueriesFromStorage = () => {
  try {
    const savedQueries = localStorage.getItem('queryHistory');
    return savedQueries ? JSON.parse(savedQueries) : [];
  } catch (error) {
    console.error('Error loading queries from localStorage:', error);
    return [];
  }
};

const saveQueriesToStorage = (queries) => {
  try {
    localStorage.setItem('queryHistory', JSON.stringify(queries));
  } catch (error) {
    console.error('Error saving queries to localStorage:', error);
  }
};

const initialState = {
  queries: loadQueriesFromStorage(),
  currentQuery: null,
  isProcessing: false,
  results: null,
  error: null,
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    submitQuery: (state, action) => {
      state.currentQuery = action.payload;
      state.isProcessing = true;
      state.error = null;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.isProcessing = false;
      const newQuery = {
        id: Date.now(),
        query: state.currentQuery,
        timestamp: new Date().toISOString(),
        status: 'completed',
      };
      state.queries.unshift(newQuery);
      saveQueriesToStorage(state.queries);
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isProcessing = false;
      const newQuery = {
        id: Date.now(),
        query: state.currentQuery,
        timestamp: new Date().toISOString(),
        status: 'error',
      };
      state.queries.unshift(newQuery);
      saveQueriesToStorage(state.queries);
    },
    clearHistory: (state) => {
      state.queries = [];
      saveQueriesToStorage([]);
    },
  },
});

export const { submitQuery, setResults, setError, clearHistory } = querySlice.actions;
export default querySlice.reducer; 