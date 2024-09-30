import ImpactMap from './components/ImpactMap';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ImpactMap />
    </QueryClientProvider>
  );
}

export default App;
