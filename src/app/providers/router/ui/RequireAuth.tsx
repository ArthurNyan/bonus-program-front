import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { ACCESS_TOKEN } from '@/shared/const/apiEndpoints/localstorageKeys';
import { loginRoute } from '@/shared/const/router/router';
import { localStorageService } from '@/shared/lib/localStorageService/localStorageService';

interface IRequireAuthProps {
    children: ReactNode;
}

export function RequireAuth({ children }: IRequireAuthProps) {
    const location = useLocation();
    const isAuth = localStorageService.getItem(ACCESS_TOKEN);

    if (!isAuth) {
        return <Navigate to={loginRoute} state={{ from: location }} replace />;
    }

    return children;
}
