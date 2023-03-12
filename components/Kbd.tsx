import { FC, ReactNode } from 'react';

interface KbdProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Kbd: FC<KbdProps> = ({ size = 'sm', children }) => {
  return <kbd className={`kbd kbd-${size}`}>{children}</kbd>;
};
