import cls from './LoginPage.module.scss';

import { AuthSidebar } from '@/widgets/Auth/ui/AuthSidebar/AuthSidebar';

const LoginPage = () => (
    <div className={cls.login_page}>
        <div className={cls.sidebar}>login</div>
        <AuthSidebar className={cls.sidebar} />
    </div>
);

export default LoginPage;
