import React, { useRef, useState } from 'react';
import css from './styles.css';
import { Button } from '../Button';
import img from './bg.jpg';

const words = [
  'Test1',
  'Test2',
  'Test3',
  'Test4',
  'Test5',
  'Test6',
  'Test7',
  'Test8',
];

export const Savanna = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const wordRef = useRef<HTMLDivElement>(null);
  const onClick = () => {
    if (!wordRef.current) return;
    wordRef.current.style.top = window
      .getComputedStyle(wordRef?.current)
      .getPropertyValue('top');
    // console.log(
    //   window.getComputedStyle(event.currentTarget).getPropertyValue('top')
    // );
    wordRef.current.classList.add(css.up);
    setTimeout(() => {
      setCurrentWord(currentWord + 1);
      wordRef?.current?.classList.add(css.down);
      wordRef?.current?.classList.remove(css.up);
    }, 1000);
  };
  return (
    <div
      className={css.savanna}
      style={{
        background: `url(${img}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <div className={`${css.word} ${css.down}`} ref={wordRef}>
        {words[currentWord]}
      </div>
      <div className={css.buttonContainer}>
        <Button selector="123" onClick={onClick}>
          Answer1
        </Button>
        <Button selector="123" onClick={onClick}>
          Answer2
        </Button>
        <Button selector="123" onClick={onClick}>
          Answer3
        </Button>
        <Button selector="123" onClick={onClick}>
          Answer4
        </Button>
      </div>
    </div>
  );
};
