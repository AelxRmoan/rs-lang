import css from './landing-page.css'
import { RegAdvCard } from './RegAdvCard/regAdvCard';

export const LandingPage = () => {


  return (
    <div className={css.landingPage__parent}>
      <h1 className={css.h1}>Rs-lang AelxRmoan Unexpert</h1>
      <section className={css.video__section}>
        <h2 className={css.h2}>Как работает наше приложение</h2>
        <iframe className={css.iframe} src="https://www.youtube.com/embed/4ogh8aFa7kY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </section>
      <section className={css.regAdv__section}>
        <h2 className={css.h2}>Присоединяйтесь к нам</h2>
        <ul className={css.regAdv__cardsUl}>
          {/* <RegAdvCard selector={css.re}>dasd</RegAdvCard> */}
        </ul>
      </section>
    </div>
  )
};