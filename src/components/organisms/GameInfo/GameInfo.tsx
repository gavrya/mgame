import clsx from 'clsx';
import React from 'react';
import { PrimaryButton } from '../../atoms/PrimaryButton';
import styles from './gameInfo.module.css';
import { ReactComponent as HandDesktopSvg } from './assets/handDesktop.svg';
import type { IGameInfoProps } from './types';

const GameInfo: React.FC<IGameInfoProps> = ({
  className,
  withBackground = false,
  buttonName,
  children,
}) => {
  const wrapperClassName = clsx(
    styles.wrapper,
    {
      [styles.background]: withBackground,
    },
    className,
  );

  return (
    <main data-testid="game-info" className={wrapperClassName}>
      <section className={styles.firstSection}>
        <HandDesktopSvg className={styles.handSvg} />
      </section>
      <section className={styles.secondSection}>
        {children}
        <PrimaryButton className={styles.submitButton}>
          {buttonName}
        </PrimaryButton>
      </section>
    </main>
  );
};

export { GameInfo };
