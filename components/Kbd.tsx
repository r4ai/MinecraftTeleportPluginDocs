import { FC, ReactNode } from 'react';
import { useTheme } from 'nextra-theme-docs';

interface KbdProps {
  children: ReactNode;
}

export const Kbd: FC<KbdProps> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  return (
    <kbd data-theme={resolvedTheme} className="kbd kbd-sm text-gray-800 dark:text-gray-200">
      {children}
    </kbd>
  );
};
