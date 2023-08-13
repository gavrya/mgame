import type React from 'react';

interface IStepProps {
  className?: string;
  children?: React.ReactNode;
  status: 'inactive' | 'current' | 'finished';
}

export type { IStepProps };
