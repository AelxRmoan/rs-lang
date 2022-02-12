import { DevCard } from './DevCard';
import { devList } from './DevCard/devCards-list';
import css from './landingPage.css'
import { RegAdvCard } from './RegAdvCard';
import { regAdvList } from './RegAdvCard/regAdvCards-list';

const genRegAdvCards = (selector: string): Array<JSX.Element> => {
  const advCards = [];
  for (let i = 0; i < regAdvList.length; i++) {
    advCards.push(          
      <RegAdvCard 
      selector={selector}
      imgSrc={regAdvList[i].img}
      title={regAdvList[i].title}
      content={regAdvList[i].content}
      />
    ) 
  }
  return advCards
}

const genDevCards = (selector: string): Array<JSX.Element> => {
  const imgPos: Array<'start'|'end'> = ['start', 'end'];
  const devCards = [];
  for (let i = 0; i < devList.length; i++) {
    devCards.push(          
      <DevCard 
      selector={selector}
      avaSrc={devList[i].ava}
      devName={devList[i].devName}
      position={devList[i].position}
      positionInfo={devList[i].positionInfo}
      itsContribution={devList[i].itsContribution}
      imgPos={imgPos[i % 2]}
      />
    ) 
  }
  return devCards
}

export const LandingPage = () => {
  return (
    <>
      <h1 className={css.h1}>Rs-lang AelxRmoan Unexpert</h1>
      <section className={css.section}>
        <h2 className={css.h2}>Как работает наше приложение</h2>
        <iframe className={css.iframe} src="https://www.youtube.com/embed/4ogh8aFa7kY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </section>
      <section className={css.section}>
        <h2 className={css.h2}>Присоединяйтесь к нам</h2>
        <ul className={css.regAdvCards__Ul}>
          {genRegAdvCards(css.regAdvCard)}
        </ul>
      </section>
      <section className={css.section}>
        <h2 className={css.h2}>Разрабатывали</h2>
        <ul className={css.devCards__Ul}>
          {genDevCards(css.devCard)}
        </ul>
      </section>
    </>
  )
};
