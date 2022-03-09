import css from './app.css';
import { StyledEngineProvider } from '@mui/material';
import React, { useContext } from 'react';
import { LandingPage } from '../LandingPage';
import { WordBook } from '../WordBook';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { SignUpForm } from '../SingUpForm';
import { RequireAuth } from '../RequireAuth';
import { Sprint } from '../Games/Sprint';
import { Audiocall } from '../Games/Audiocall';
import { Intro as SprintIntro } from '../Games/Sprint/Intro';
import { Intro as AudiocallIntro } from '../Games/Audiocall/Intro';
import { Footer } from '../Footer';
import { Games } from '../Games';
import { Provider } from '../Provider';
import { Context } from '../Provider';

export const App: React.FC = () => {
  const {currWords, setCurrWords} = useContext(Context);
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route
                  path="WordBook"
                  element={
                    <RequireAuth>
                      <WordBook />
                    </RequireAuth>
                  }
                />
                <Route path="/games" element={<Games />} />
                <Route path="/games/sprint/start" element={<Sprint bookWords={currWords} />} />
                <Route path="/games/sprint" element={<SprintIntro />} />
                <Route path="/games/audiocall/start" element={<Audiocall bookWords={currWords}/>} />
                <Route path="/games/audiocall" element={<AudiocallIntro />} />
                <Route path="*" element={<Navigate to={'/'} replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
