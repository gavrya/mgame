import clsx from 'clsx';
import React from 'react';
import styles from './step.module.css';
import { ReactComponent as StepMobileSvg } from './assets/stepMobile.svg';
import { ReactComponent as StepDesktopSvg } from './assets/stepDesktop.svg';
import type { IStepProps } from './types';

const Step: React.FC<IStepProps> = ({ className, children, status }) => {
  const titleClassName = clsx({
    [styles.titleInactive]: status === 'inactive',
    [styles.titleCurrent]: status === 'current',
    [styles.titleFinished]: status === 'finished',
  });

  const borderClassName = clsx({
    [styles.borderCurrent]: status === 'current',
  });

  return (
    <div data-testid="step" className={clsx(styles.wrapper, className)}>
      <StepMobileSvg
        data-testid="mobile-svg"
        className={clsx(styles.svgElement, styles.mobileSvg, borderClassName)}
      />
      <StepDesktopSvg
        data-testid="desktop-svg"
        className={clsx(styles.svgElement, styles.desktopSvg, borderClassName)}
      />
      <div
        data-testid="children"
        className={clsx(styles.children, titleClassName)}
      >
        {children}
      </div>
    </div>
  );
};

export { Step };
