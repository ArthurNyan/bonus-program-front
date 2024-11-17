import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppRouter } from './providers/router';

import './styles/index.scss';
import '@mantine/core/styles.css';

const queryClient = new QueryClient();

function App() {
    return (
        <MantineProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </QueryClientProvider>
        </MantineProvider>
    );
}

export default App;
