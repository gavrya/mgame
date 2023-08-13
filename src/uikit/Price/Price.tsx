import React from 'react';
import { formatPrice } from './utils/formatPrice';
import type { IPriceProps } from './types';

const Price: React.FC<IPriceProps> = ({ className, children }) => (
  <span data-testid="price" className={className}>
    {formatPrice(children)}
  </span>
);

export { Price };
