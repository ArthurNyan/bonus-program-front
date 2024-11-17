import cls from './LoginPage.module.scss';

import { AuthSidebar } from '@/widgets/Auth/ui/AuthSidebar/AuthSidebar';
import { LoginForm } from '@/widgets/Auth/ui/LoginForm/LoginForm';

const LoginPage = () => (
    <div className={cls.login_page}>
        <LoginForm className={cls.place} />
        <AuthSidebar className={cls.place} />
    </div>
);

export default LoginPage;
