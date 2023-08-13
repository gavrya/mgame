import type React from 'react';

interface IOptionButtonProps {
  className?: string;
  status: 'inactive' | 'selected' | 'correct' | 'wrong';
  option: string;
  question: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type { IOptionButtonProps };
