import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import cls from './LoginPage.module.scss';

import { ACCESS_TOKEN } from '@/shared/const/apiEndpoints/localstorageKeys';
import { AuthSidebar } from '@/widgets/Auth/ui/AuthSidebar/AuthSidebar';
import { LoginForm } from '@/widgets/Auth/ui/LoginForm/LoginForm';

const LoginPage = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [navigate, token]);

    return (
        <div className={cls.login_page}>
            <LoginForm className={cls.place} />
            <AuthSidebar className={cls.place} />
        </div>
    );
};

export default LoginPage;
