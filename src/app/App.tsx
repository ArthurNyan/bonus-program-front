import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { AppRouter } from './providers/router';

import './styles/index.scss';
import '@mantine/core/styles.css';

function App() {
    return (
        <MantineProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
