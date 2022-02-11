import css from './landingPage.css'
import { RegAdvCard } from './RegAdvCard/regAdvCard';
import { regAdvList } from './RegAdvCard/regAdvCards-list';


export const LandingPage = () => {
  let cards = [];
  for (let i = 0; i < regAdvList.length; i++) {
    cards.push(          
      <RegAdvCard 
      selector={css.regAdvCard}
      index={`${i + 1}`} 
      imgSrc={regAdvList[i].img}
      title={regAdvList[i].title}
      content={regAdvList[i].content}
      />
    ) 
  }

  return (
    <>
      <h1 className={css.h1}>Rs-lang AelxRmoan Unexpert</h1>
      <section className={css.section}>
        <h2 className={css.h2}>Как работает наше приложение</h2>
        <iframe className={css.iframe} src="https://www.youtube.com/embed/4ogh8aFa7kY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </section>
      <section className={css.section}>
        <h2 className={css.h2}>Присоединяйтесь к нам</h2>
        <ul className={css.regAdv__cardsUl}>
          {cards}
        </ul>
      </section>
    </>
  )
};