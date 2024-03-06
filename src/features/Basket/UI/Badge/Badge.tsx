import type { FC, ReactNode } from 'react';

import s from './Badge.module.css';

type BadgeProps = {
  count: number;
  children: ReactNode;
};

const Badge: FC<BadgeProps> = ({ count, children }) => (
  <div className={s.badge}>
    {children}
    {count >= 1 && <span className={s.badgeCount}>{count}</span>}
  </div>
);

export default Badge;
