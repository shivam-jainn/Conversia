import React from 'react';
import SearchBar from './SearchBar';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

// const queryClient = new QueryClient({});

function App() {
  return (
       
 

       <div className='mainLanding'>
        <SearchBar />
    </div>


  );
}

export default App;
