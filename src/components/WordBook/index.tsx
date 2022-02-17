import { Pagination, Stack, Tab, Tabs } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';
import { useEffect, useState } from 'react';
import css from './wordBook.css';
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
      console.log(page)
      state(jsxArr)
    })
}

export const WordBook = () => {
  const [group, setGroup] = useState(0);
  const handleTabs = (e: React.SyntheticEvent, value: number) => setGroup(value);
  
  const [page, setPage] = useState(1);
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => setPage(value);
  
  const [newPage, setNewPage] = useState([] as JSX.Element[]);
  useEffect(() => {buildWordsPage(setNewPage, group, page - 1)}, [])
  useEffect(() => {buildWordsPage(setNewPage, group, page - 1)}, [page, group])
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
        {/* <Tab className={css.levels__levels} label="complex" onClick={() => {setGroup(1)}}/> */}
      </Tabs>
      <Stack spacing={2}>
        <Pagination count={10} page={page} onChange={handleChange}/>
      </Stack> 
    </section>
    <section className={css.page}>
      <h2 className={css.h2}>Level {group + 1}</h2>
      <h3 className={css.h3}>Page {page}</h3>
      <ul className={css.ul}>
        {newPage}
      </ul>
    </section>
    </>
  )
}
// export const WordBook = () => {
//   const  [color1, setColor1] = useState('white');
//   const  [color2, setColor2] = useState('white');
//   const  [color3, setColor3] = useState('white');
//   const  [color4, setColor4] = useState('white');
//   const arrSetColor = [setColor1, setColor2, setColor3, setColor4];
//   const [TL, setTL] = useState('0');
//   const chooseActiveTab = (num: number) => {
//     arrSetColor.forEach(f => f('white'))
//     arrSetColor[num]('var(--text-dark)');
//     setTL(`${100 * num}%`);
//   }

//   return (
//     <section className={css.header}>
//       <ul className={css.levels__ul}>
//         <li className={css.levels__li} style={{color: `${color1}`}} onClick={() => {chooseActiveTab(0)}}>asdas</li>
//         <li className={css.levels__li} style={{color: `${color2}`}} onClick={() => {chooseActiveTab(1)}}>asdasd</li>
//         <li className={css.levels__li} style={{color: `${color3}`}} onClick={() => {chooseActiveTab(2)}}>asdas</li>
//         <li className={css.levels__li} style={{color: `${color4}`}} onClick={() => {chooseActiveTab(3)}}>asdad</li>  
//       </ul>
//       <div className={css.levels__underline} style={{transform: `translateX(${TL})`}}></div>
//     </section>
//   )
// }
