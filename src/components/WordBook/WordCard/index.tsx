import { Button } from '@mui/material';
import css from './wordCard.css';

async function addToPrivate (wordId: string, difficulty: number) {
  const token = localStorage.getItem('token') as string;
  const userId = localStorage.getItem('userId') as string;
  const body = { 
    "difficulty": ["hard", "easy"][difficulty],
    "optional": {}
  }
  const resp = await fetch(`https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(body)
  }).then(resp => {
    if (!resp.ok) {
      const resp = fetch(`https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/users/${userId}/words/${wordId}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
      })
    }
  }).catch(err => console.log(err))
}

async function activateAudio(meaning: string, example: string): Promise<void> {
  const audio: Promise<HTMLAudioElement[]> = new Promise(resolve => {
    const audioMean = new Audio(`https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/${meaning}`);
    const audioExam = new Audio(`https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/${example}`);
    resolve([audioMean, audioExam])
  })
  audio.then(audio => {
    setTimeout(() => {
        audio[0].play(); 
        setTimeout(()=>{audio[1].play()}, audio[0].duration * 1000)      
    }, 500)
  })
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
  const id = Object.keys(p[i]).includes('id') ? 'id' : '_id' as keyof wordCard;
  return (
    <li className={`${css.card__Container}`}>
      <div className={css.img} style={{background: `url(https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/${p[i].image}) no-repeat center`, backgroundSize: 'cover'}}/>
      <div className={`${css.rightFlex}`}>
        <h3 className={css.h3}>{`${p[i].word} - ${p[i].transcription} - ${p[i].wordTranslate}`}</h3>
        <p className={css.p} dangerouslySetInnerHTML={{__html: `${p[i].textMeaning} - ${p[i].textMeaningTranslate}`}}/>
        <p className={css.p} dangerouslySetInnerHTML={{__html: `${p[i].textExample} - ${p[i].textExampleTranslate}`}}/>
        <Button className={css.btn} onClick={() => {activateAudio(p[i].audioMeaning, p[i].audioExample)}}>Audio</Button>
        {authorized &&
          <div className={css.btnFlex}>
            <Button className={css.btnHalf} onClick={() => {addToPrivate(p[i][`${id}`], 0)}}>Add to Complex</Button>
            <Button className={css.btnHalf} onClick={() => {addToPrivate(p[i][`${id}`], 1)}}>Add to Simple</Button>
          </div>
        }
      </div>
    </li>
  )
};
