import clsx from 'clsx';
import React from 'react';
import styles from './menuToggle.module.css';
import { ReactComponent as MenuSvg } from './assets/menu.svg';
import { ReactComponent as CloseSvg } from './assets/close.svg';
import type { IMenuToggleProps } from './types';

const MenuToggle: React.FC<IMenuToggleProps> = ({
  className,
  isOpened = false,
  onToggle,
}) => (
  <button
    data-testid="menu-toggle"
    type="button"
    className={clsx(styles.wrapper, className)}
    onClick={onToggle}
  >
    {isOpened ? (
      <CloseSvg data-testid="close-svg" className={styles.svgIcon} />
    ) : (
      <MenuSvg data-testid="menu-svg" className={styles.svgIcon} />
    )}
  </button>
);

export { MenuToggle };
