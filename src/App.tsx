import { MainPage } from './presentation/pages/MainPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FilterContextProvider } from './helpers/context/filterContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>
        <MainPage />
      </FilterContextProvider>
    </QueryClientProvider>
  )
}

export default App
