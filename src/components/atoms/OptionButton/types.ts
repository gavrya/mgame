import type React from 'react';

interface IOptionButtonProps {
  className?: string;
  status: 'inactive' | 'selected' | 'correct' | 'wrong';
  option: string;
  answer: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type { IOptionButtonProps };
