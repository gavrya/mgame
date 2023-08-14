import clsx from 'clsx';
import React from 'react';
import styles from './primaryButton.module.css';
import type { IPrimaryButtonProps } from './types';

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  className,
  children,
  onClick,
}) => (
  <button
    data-testid="primary-button"
    type="button"
    className={clsx(styles.wrapper, className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export { PrimaryButton };
