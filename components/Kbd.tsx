import { FC, ReactNode } from 'react';
import { useTheme } from 'nextra-theme-docs';

interface KbdProps {
  children: ReactNode;
}

export const Kbd: FC<KbdProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <kbd data-theme={theme} className={`kbd kbd-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
      {children}
    </kbd>
  );
};
