import { DevCard } from './DevCard';
import { devList } from './DevCard/DevCards-list';
import css from './landingPage.css';
import { RegAdvCard } from './RegAdvCard';
import { regAdvList } from './RegAdvCard/regAdvCards-list';

const genRegAdvCards = (selector: string): Array<JSX.Element> => {
  const advCards = [];
  for (let i = 0; i < regAdvList.length; i++) {
    advCards.push(
      <RegAdvCard
        key={`regAdvcard${i}`}
        selector={selector}
        imgSrc={regAdvList[i].img}
        title={regAdvList[i].title}
        content={regAdvList[i].content}
      />
    );
  }
  return advCards;
};

const genDevCards = (selector: string): Array<JSX.Element> => {
  const imgPos: Array<'start' | 'end'> = ['start', 'end'];
  const devCards = [];
  for (let i = 0; i < devList.length; i++) {
    devCards.push(
      <DevCard
        key={`devcard${i}`}
        selector={selector}
        avaSrc={devList[i].ava}
        devName={devList[i].devName}
        position={devList[i].position}
        positionInfo={devList[i].positionInfo}
        itsContribution={devList[i].itsContribution}
        imgPos={imgPos[i % 2]}
        link={devList[i].link}
      />
    );
  }
  return devCards;
};

export const LandingPage = () => {
  return (
    <>
      <h1 className={css.h1}>Rs-lang AelxRmoan Unexpert</h1>
      <section className={css.section}>
        <h2 className={css.h2}>How It Works</h2>
        <iframe
          className={css.iframe}
          src="https://www.youtube.com/embed/4ogh8aFa7kY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className={css.section}>
        <h2 className={css.h2}>Join Us</h2>
        <ul className={css.regAdvCards__Ul}>
          {genRegAdvCards(css.regAdvCard)}
        </ul>
      </section>
      <section className={css.section}>
        <h2 className={css.h2}>Developers</h2>
        <ul className={css.devCards__Ul}>{genDevCards(css.devCard)}</ul>
      </section>
    </>
  );
};
