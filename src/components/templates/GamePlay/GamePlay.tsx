import React, { useState } from 'react';
import { MenuToggle } from '../../atoms/MenuToggle';
import { GameQuiz } from '../../organisms/GameQuiz';
import { GameSteps } from '../../molecules/GameSteps';
import styles from './gamePlay.module.css';
import type { IGamePlayProps } from './types';

const GamePlay: React.FC<IGamePlayProps> = ({
  question,
  gameSteps,
  answerOptions,
  onAnswerOptionSelect,
}) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const handleMenuToggle = () => setIsMenuOpened((flag) => !flag);

  return (
    <main className={styles.wrapper}>
      <nav className={styles.menuToggleContainer}>
        <MenuToggle isOpened={isMenuOpened} onToggle={handleMenuToggle} />
      </nav>
      <section className={styles.gameContainer}>
        <section className={styles.gameQuizContainer}>
          <GameQuiz
            question={question}
            answerOptions={answerOptions}
            onAnswerOptionSelect={onAnswerOptionSelect}
          />
        </section>
        <aside data-opened={isMenuOpened} className={styles.gameStepsContainer}>
          <GameSteps gameSteps={gameSteps} />
        </aside>
      </section>
    </main>
  );
};

export { GamePlay };
