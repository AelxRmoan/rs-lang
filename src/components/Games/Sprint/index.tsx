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
interface lll {
  bookWords: Promise<object[]>
}

export const Sprint = ({bookWords}: lll) => {
  const [wordIndex, setWordIndex] = useState(0);
  const eventKeyboardListenerId = useRef<(event: KeyboardEvent) => void>(null);
  const [words, setWords] = useState<Word[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [time, setTime] = useState(60);
  const [startTimer, setStartTimer] = useState(false);
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

  useEffect(() => {
    if (startTimer) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 1 && startTimer) {
      setStartTimer(false);
      onEndGame();
    }
  }, [time, startTimer]);

  const answer = useMemo(() => {
    if (!words.length || !words[wordIndex]) return '';
    const coin = getRandomNumber(2);

    if (coin === 0) {
      return words[wordIndex].wordTranslate;
    }
    const randomIndex = getRandomNumber(words.length);
    return words[randomIndex].wordTranslate;
  }, [wordIndex, words]);

  const checkAnswer = (isRight: boolean) => {
    wrong.pause();
    correct.pause();
    if ((words[wordIndex].wordTranslate === answer) === isRight) {
      const bonusScore = combo >= 2 ? 20 : 0;
      setScore(score + 20 + bonusScore);
      setCombo(Math.min(combo + 1, 3));
      results.known.push(words[wordIndex]);
      correct.play();
    } else {
      setCombo(0);
      results.unknown.push(words[wordIndex]);
      wrong.play();
    }
    setResults({ ...results });
  };

  const onRightClick = () => {
    checkAnswer(true);
    setWordIndex(wordIndex + 1);
  };
  const onWrongClick = () => {
    checkAnswer(false);
    setWordIndex(wordIndex + 1);
  };

  useEffect(() => {
    getWords(+(searchParams?.get('level') || 0)).then((data) => {
      setWords(shuffleArray(data).slice(0, 20));
      setStartTimer(true);
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
      if (event.code === 'ArrowRight') {
        onWrongClick();
      }
    };
    window.addEventListener('keydown', eventKeyboardListenerId.current);
    return () => {
      //@ts-ignore
      window.removeEventListener('keydown', eventKeyboardListenerId.current);
    };
  }, [onRightClick, onWrongClick]);

  return (
    <div className={css.area}>
      <ul className={css.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {console.log(bookWords)}
      <div className={css.container}>
        {words.length &&
          (words[wordIndex] && time > 0 ? (
            <>
              <div className={css.score}>
                <Typography variant="h3">Score:{score}</Typography>
              </div>
              <Typography variant="h2">Time:{time}</Typography>

              <Typography variant="h1">{words[wordIndex].word}</Typography>
              <Typography variant="h2">{answer}</Typography>
              <div className={css.buttonContainer}>
                <Button selector={css.btn} onClick={onRightClick}>
                  Right
                </Button>
                <Button selector={css.btn} onClick={onWrongClick}>
                  Wrong
                </Button>
              </div>
            </>
          ) : (
            <Result {...results} />
          ))}
      </div>
    </div>
  );
};
