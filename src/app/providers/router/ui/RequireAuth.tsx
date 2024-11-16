import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { loginRoute } from '@/shared/const/router/router';

interface IRequireAuthProps {
    children: ReactNode;
}

export function RequireAuth({ children }: IRequireAuthProps) {
    const location = useLocation();
    const isAuth = false;

    if (!isAuth) {
        return <Navigate to={loginRoute} state={{ from: location }} replace />;
    }

    return children;
}
