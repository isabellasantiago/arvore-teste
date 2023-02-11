import { MainPage } from './presentation/pages/MainPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FilterContextProvider } from './helpers/context/filterContext';
import { SearchPage } from './presentation/pages/SearchPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>
        {/* <MainPage /> */}
        <SearchPage />
      </FilterContextProvider>
    </QueryClientProvider>
  )
}

export default App
