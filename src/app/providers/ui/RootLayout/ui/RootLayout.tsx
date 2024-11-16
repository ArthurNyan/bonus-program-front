import { Outlet } from 'react-router';

import cls from './RootLayout.module.scss';

export const RootLayout = () => (
    <div className={cls.main_layout}>
        <main className={cls.container}>
            <div className={cls.wrapper}>
                <Outlet />
            </div>
        </main>
    </div>
);
