import React from 'react';
import { MainPage } from './presentation/pages/MainPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FilterContextProvider } from './helpers/context/filter/filterContext';
import { SearchPage } from './presentation/pages/SearchPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FilterContextProvider>
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path="/search" element={<SearchPage />}/>
          </Routes>
        </FilterContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
