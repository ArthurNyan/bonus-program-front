import { RootLayout } from '../../ui/RootLayout';

import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutesEnum, loginRoute, RootRoutesEnum } from '@/shared/const/router/router';
import type { TAppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<RootRoutesEnum, TAppRoutesProps> = {
    [RootRoutesEnum.Login]: {
        path: loginRoute,
        element: <LoginPage />,
    },
    [RootRoutesEnum.RootLayout]: {
        path: '/',
        element: <RootLayout />,
        nestedRoutes: {
            [AppRoutesEnum.Main]: {
                path: '/',
                element: <HomePage />,
            },
        },
    },
    [RootRoutesEnum.NotFound]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
