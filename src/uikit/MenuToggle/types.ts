import type React from 'react';

interface IMenuToggleProps {
  className?: string;
  isOpened: boolean;
  onToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type { IMenuToggleProps };
