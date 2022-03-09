import css from './wordBook.css';
import { Button, Pagination, Stack, Tab, Tabs } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { WordCard } from './WordCard';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Provider';

async function goForPublic (url: string) {
  const resp = await fetch(`https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  return await resp.json()
}

async function goForPrivate (page: number, difficulty: number) {
  const token = localStorage.getItem('token') as string;
  const userId = localStorage.getItem('userId') as string;
  const resp = await fetch(`https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/users/${userId}/aggregatedWords?page=${page}&wordsPerPage=20&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22${['hard', 'easy'][difficulty]}%22%7D%5D%7D`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  return await resp.json()
}
function buildPublicPage (state: (p: JSX.Element[]) => void, group: number, page: number, authorized?: boolean): void {
  goForPublic(`words?group=${group}&page=${page}`)
  .then(wordsArr => {
    const jsxArr = [];
    for (let i = 0; i < wordsArr.length; i++) {
      jsxArr.push(<WordCard p={wordsArr} i={i} key={wordsArr[i].id} authorized={authorized}/>)
    }
    state(jsxArr)
  })
}
function buildPrivatePage (state: (p: JSX.Element[]) => void, page: number, difficulty: number, authorized?: boolean): void {
  goForPrivate(page, difficulty)
  .then(wordsArr => {
    const cleanedWordsArr = wordsArr[0].paginatedResults;
    const jsxArr = [];
    for (let i = 0; i < cleanedWordsArr.length; i++) {
      jsxArr.push(<WordCard p={cleanedWordsArr} i={i} key={`private-${cleanedWordsArr[i]._id}`} authorized={authorized}/>)
    }
    state(jsxArr)
  })
}

function buildWordsPage(state: (p: JSX.Element[]) => void, group: number, page: number, authorized?: boolean): void{
  if (group === 6) {
    buildPrivatePage(state, page, 0, authorized);
  } else if (group === 7) {
    buildPrivatePage(state, page, 1, authorized);
  } else {
    buildPublicPage(state, group, page, authorized);
  }
}

async function playGame(group: number, page: number) {
  let resultArr: Object[] = [];
  if (group === 6) {
    for (let i = page; i > 0; i--) {
      const resp = await goForPrivate(page, 0)
      .then(wordArr => resultArr = [...resultArr, ...wordArr[0].paginatedResults])
    }
  } else if (group === 7) {
    for (let i = page; i > 0; i--) {
      const resp = await goForPrivate(page, 1)
      .then(wordArr => resultArr = [...resultArr, ...wordArr[0].paginatedResults])
    }
  } else {
    for (let i = page; i > 0; i--) {
      const resp = await goForPublic(`words?group=${group}&page=${i}`)
      .then(wordArr => resultArr = [...resultArr, ...wordArr])
    }
  }
  localStorage.setItem('currWords', JSON.stringify(resultArr))
  return resultArr
}

interface WordBook {
  authorized?: boolean
}

export const WordBook = ({authorized}: WordBook) => {
  const {setCurrWords} = useContext(Context);
  const navigate = useNavigate();
  const [group, setGroup] = useState(0);
  const handleTabs = (e: React.SyntheticEvent, value: number) => setGroup(value);
  
  const [page, setPage] = useState(1);
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => setPage(value);
  
  const [wordPage, setWordPage] = useState([] as JSX.Element[]);
  useEffect(() => {buildWordsPage(setWordPage, group, page - 1, authorized)}, [])
  useEffect(() => {buildWordsPage(setWordPage, group, page - 1, authorized)}, [page, group])
  return (
    <>
    <section className={css.header}>
      <Tabs className={css.levels__con} value={group} onChange={handleTabs}>
        <Tab className={css.levels__levels} label="Level1"/>
        <Tab className={css.levels__levels} label="Level2"/>
        <Tab className={css.levels__levels} label="Level3"/>
        <Tab className={css.levels__levels} label="Level4"/>
        <Tab className={css.levels__levels} label="Level5"/>
        <Tab className={css.levels__levels} label="Level6"/>
        {authorized && <Tab className={css.levels__levels} label="Complex"/>}
        {authorized && <Tab className={css.levels__levels} label="Simple"/>}
      </Tabs>
      <Stack spacing={2}>
        <Pagination count={20} page={page} onChange={handleChange}/>
      </Stack> 
    </section>
    <section className={css.page}>
      <h2 className={css.h2}>Level {group + 1}</h2>
      <h3 className={css.h3}>Page {page}</h3>
      <div className={css.gameBtnFlex}>
        <Button className={css.gameBtn} onClick={() => {setCurrWords(playGame(group, page)); setTimeout(() => {
          navigate('/games/sprint')
        }, 3000);}}>Sprint</Button>
        <Button className={css.gameBtn} onClick={() => {setCurrWords(playGame(group, page)); setTimeout(() => {
          navigate('/games/audiocall')
        }, 3000);}}>Audio Call</Button>
      </div>
      <ul className={css.ul}>
        {wordPage}
      </ul>
      <Stack spacing={2}>
        <Pagination count={20} page={page} onChange={handleChange}/>
      </Stack> 
    </section>
    </>
  )
}
