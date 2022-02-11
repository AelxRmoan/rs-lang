import { LandingPage } from '../LandingPage/landingPage';
import css from './main.css';

export const Main = () => {
  return (
    <main className={css.main}>
      <img src={require('../../assets/img/RegAdvCards/goose.jpg')} alt="" />
      <LandingPage/>
    </main>
  )
};