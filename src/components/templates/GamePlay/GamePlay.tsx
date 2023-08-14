import React from 'react';
import { MenuToggle } from '../../atoms/MenuToggle';
import { GameQuiz } from '../../organisms/GameQuiz';
import { GameSteps } from '../../molecules/GameSteps';
import type { IGamePlayProps } from './types';

const GamePlay: React.FC<IGamePlayProps> = ({
  question,
  gameSteps,
  answerOptions,
  onAnswerOptionSelect,
}) => (
  <main>
    <nav>
      <MenuToggle isOpened={false} />
    </nav>
    <section>
      <GameQuiz
        question={question}
        answerOptions={answerOptions}
        onAnswerOptionSelect={onAnswerOptionSelect}
      />
    </section>
    <aside>
      <GameSteps gameSteps={gameSteps} />
    </aside>
  </main>
);

export { GamePlay };
