import type React from 'react';

interface IPrimaryButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type { IPrimaryButtonProps };
