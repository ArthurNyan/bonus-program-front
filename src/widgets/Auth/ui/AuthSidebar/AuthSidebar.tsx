import cn from 'classnames';

import cls from './AuthSidebar.module.scss';

export const AuthSidebar = ({ className }: { className: string }) => <div className={cn(cls.sidebar, className)} />;
