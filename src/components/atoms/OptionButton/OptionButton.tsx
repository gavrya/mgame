import clsx from 'clsx';
import React from 'react';
import styles from './optionButton.module.css';
import { ReactComponent as OptionMobileSvg } from './assets/optionMobile.svg';
import { ReactComponent as OptionDesktopSvg } from './assets/optionDesktop.svg';
import type { IOptionButtonProps } from './types';

const OptionButton: React.FC<IOptionButtonProps> = ({
  className,
  status,
  option,
  answer,
  onClick,
}) => {
  const statusClassName = clsx({
    [styles.statusSelected]: status === 'selected',
    [styles.statusCorrect]: status === 'correct',
    [styles.statusWrong]: status === 'wrong',
  });

  return (
    <button
      type="button"
      data-testid="option-button"
      className={clsx(styles.wrapper, className)}
      onClick={onClick}
    >
      <OptionMobileSvg
        data-testid="mobile-svg"
        className={clsx(styles.svgElement, styles.mobileSvg, statusClassName)}
      />
      <OptionDesktopSvg
        data-testid="desktop-svg"
        className={clsx(styles.svgElement, styles.desktopSvg, statusClassName)}
      />
      <div data-testid="question" className={styles.question}>
        <span className={styles.option}>{option}</span>
        {answer}
      </div>
    </button>
  );
};

export { OptionButton };
