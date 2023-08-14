import type React from 'react';

interface IGameInfoProps {
  className?: string;
  withBackground?: boolean;
  buttonName: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type { IGameInfoProps };
