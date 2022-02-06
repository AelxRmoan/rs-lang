import css from './header.css'
import { Button } from '../Button/button';

export const Header = () => {
  return (
    <header className={css.header} id="header">
      <div className={css.header__flex} id="header__flex">
        <Button selector={css.btn} name="header__btn-wordBook" content="Word Book"/>
        <Button selector={css.btn} name="header__btn-statistics" content="Statistics"/>
        <Button selector={css.btn} name="header__btn-games" content="Games"/>
      </div>
        <Button selector={css.btn} name="header__btn-login" content="Login"/>
    </header>
  )
};