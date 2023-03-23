import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { YoutubeAPIProvider } from './context/YoutubeAPIContext';
import { routers } from './router';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <YoutubeAPIProvider>
          <RouterProvider router={routers} />
        </YoutubeAPIProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
