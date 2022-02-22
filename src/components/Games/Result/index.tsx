import React from 'react';
import css from './styles.css';
import { Word } from '../../../types';
import { Button } from '../../Button';
import { useNavigate } from 'react-router';

interface Props {
  known: Word[];
  unknown: Word[];
  gameName: string;
}

export const Result: React.FC<Props> = ({ known, unknown, gameName }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className={css.title}></h1>

      <div className={css.worldList}>
        <h2 className={css.knownTitle}>Знаю: {known.length}</h2>
        {known.map((item) => (
          <li className={css.words}>
            {item.word} - {item.wordTranslate}
          </li>
        ))}
      </div>
      <div className={css.worldList}>
        <h2 className={css.unknownTitle}>Не знаю: {unknown.length}</h2>
        {unknown.map((item) => (
          <li className={css.words}>
            {item.word} - {item.wordTranslate}
          </li>
        ))}
      </div>
      <Button
        selector={css.button}
        onClick={() => navigate(`/games/${gameName}`)}
      >
        Играть еще раз
      </Button>
    </div>
  );
};
