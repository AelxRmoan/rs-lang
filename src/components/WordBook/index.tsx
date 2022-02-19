import css from './wordBook.css';
import { Pagination, Stack, Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { WordCard } from './WordCard';

async function goForWords (url: string) {
  const resp = await fetch(`https://aelx-rmoan-unexpert-rs-lang.herokuapp.com/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  return await resp.json()
}

function buildWordsPage(state: (p: JSX.Element[]) => void, group?: number, page?: number): void{
  goForWords(`words?group=${group}&page=${page}`)
    .then(wordsArr => {
      const jsxArr = [];
      for (let i = 0; i < wordsArr.length; i++) {
        jsxArr.push(<WordCard p={wordsArr} i={i} key={wordsArr[i].id}/>)
      }
      state(jsxArr)
    })
}

interface WordBook {
  authorized?: boolean
}

export const WordBook = ({authorized}: WordBook) => {
  const [group, setGroup] = useState(0);
  const handleTabs = (e: React.SyntheticEvent, value: number) => setGroup(value);
  
  const [page, setPage] = useState(1);
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => setPage(value);
  
  const [wordPage, setWordPage] = useState([] as JSX.Element[]);
  useEffect(() => {buildWordsPage(setWordPage, group, page - 1)}, [])
  useEffect(() => {buildWordsPage(setWordPage, group, page - 1)}, [page, group])
  return (
    <>
    <section className={css.header}>
      <Tabs className={css.levels__con} value={group} onChange={handleTabs}>
        <Tab className={css.levels__levels} label="level1"/>
        <Tab className={css.levels__levels} label="level2"/>
        <Tab className={css.levels__levels} label="level3"/>
        <Tab className={css.levels__levels} label="level4"/>
        <Tab className={css.levels__levels} label="level5"/>
        <Tab className={css.levels__levels} label="level6"/>
        {authorized && <Tab className={css.levels__levels} label="complex"/>}
      </Tabs>
      <Stack spacing={2}>
        <Pagination count={10} page={page} onChange={handleChange}/>
      </Stack> 
    </section>
    <section className={css.page}>
      <h2 className={css.h2}>Level {group + 1}</h2>
      <h3 className={css.h3}>Page {page}</h3>
      <ul className={css.ul}>
        {wordPage}
      </ul>
      <Stack spacing={2}>
        <Pagination count={10} page={page} onChange={handleChange}/>
      </Stack> 
    </section>
    </>
  )
}
