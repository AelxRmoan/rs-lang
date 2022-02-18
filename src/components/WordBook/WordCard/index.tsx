import { Button } from '@mui/material';
import css from './wordCard.css';

async function addToComplex () {
  const token = localStorage.getItem('token');
  const resp = fetch('')
}

type wordCard = {
  id: string,
  image: string,
  word: string,
  transcription: string,
  wordTranslate: string,
  textMeaning: string,
  textMeaningTranslate: string,
  textExample: string,
  textExampleTranslate: string,
  audioMeaning: string,
  audioExample: string,
}

interface WordCard {
  p: wordCard[],
  i: number,
  authorized?: boolean,
}

export const WordCard = ({p, i, authorized}:WordCard): JSX.Element => {
  const audioMean = new Audio(`https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/${p[i].audioMeaning}`);
  const audioExam = new Audio(`https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/${p[i].audioExample}`);
  return (
    <li className={`${css.card__Container}`}>
      <div className={css.img} style={{background: `url(https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/${p[i].image}) no-repeat center`, backgroundSize: 'cover'}}/>
      <div className={`${css.rightFlex}`}>
        <h3 className={css.h3}>{`${p[i].word} - ${p[i].transcription} - ${p[i].wordTranslate}`}</h3>
        <p className={css.p} dangerouslySetInnerHTML={{__html: `${p[i].textMeaning} - ${p[i].textMeaningTranslate}`}}/>
        <p className={css.p} dangerouslySetInnerHTML={{__html: `${p[i].textExample} - ${p[i].textExampleTranslate}`}}/>
        <Button className={css.btn} onClick={() => {audioMean.play(); setTimeout(()=>{audioExam.play()}, audioMean.duration * 1000)}}>Audio</Button>
        {/* {authorized &&
          <div className={css.btnFlex}>
            <Button className={css.btn} onClick={() => {}}>Add to Complex</Button>
          </div>
        } */}
      </div>
    </li>
  )
};
