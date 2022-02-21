import React, { useEffect, useMemo, useRef, useState } from 'react';
import css from './styles.css';
import { Button } from '../../Button';
import { getWords } from '../../../api/words';
import { Word } from '../../../types';
import { Typography } from '@mui/material';
import { putLearnedWords } from '../../../api/words';
import { useSearchParams } from 'react-router-dom';
import { Result } from '../Result';
import correctAudio from '../correct.mp3';
import wrongAudio from '../wrong.mp3';

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

const correct = new Audio(correctAudio);
const wrong = new Audio(wrongAudio);

export const Audiocall = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const eventKeyboardListenerId = useRef<(event: KeyboardEvent) => void>(null);
  const [words, setWords] = useState<Word[]>([]);
  const [results, setResults] = useState<{ known: Word[]; unknown: Word[] }>({
    known: [],
    unknown: [],
  });

  const [searchParams] = useSearchParams();

  const shuffleArray = (array: Word[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const onEndGame = () => {
    putLearnedWords(results.known.length);
  };

  const answers = useMemo(() => {
    if (!words.length || !words[wordIndex]) return [];
    const randomAnswers = shuffleArray(words).slice(1, 5);

    return randomAnswers.concat(words[wordIndex]);
  }, [wordIndex, words]);

  const checkAnswer = (rightWord: string) => {
    wrong.pause();
    correct.pause();
    if (words[wordIndex].wordTranslate === rightWord) {
      results.known.push(words[wordIndex]);
      correct.play();
    } else {
      results.unknown.push(words[wordIndex]);
      wrong.play();
    }
    setResults({ ...results });
  };

  const onRightClick = () => {
    checkAnswer('');
    setWordIndex(wordIndex + 1);
  };

  useEffect(() => {
    getWords(+(searchParams?.get('level') || 0)).then((data) => {
      setWords(shuffleArray(data));
    });
  }, []);

  useEffect(() => {
    if (eventKeyboardListenerId.current !== null) {
      window.removeEventListener('keydown', eventKeyboardListenerId.current);
    }
    if (!words[wordIndex]) return;
    //@ts-ignore
    eventKeyboardListenerId.current = (event) => {
      if (event.code === 'ArrowLeft') {
        onRightClick();
      }
    };
    window.addEventListener('keydown', eventKeyboardListenerId.current);
    return () => {
      //@ts-ignore
      window.removeEventListener('keydown', eventKeyboardListenerId.current);
    };
  }, [onRightClick]);

  return (
    <div className={css.area}>
      <ul className={css.circles}>
        {/* <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li> */}
        {words.map((word) => (
          <li>{word.word}</li>
        ))}
      </ul>

      {words.length &&
        (words[wordIndex] ? (
          <>
            <Typography variant="h1">{words[wordIndex].word}</Typography>
            {answers.map((item) => (
              <div>{item.wordTranslate}</div>
            ))}
            <Button selector={''} onClick={onRightClick}>
              Не знаю
            </Button>
          </>
        ) : (
          <Result {...results} />
        ))}
    </div>
  );
};
