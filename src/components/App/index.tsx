import css from './app.css';
import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import { LandingPage } from '../LandingPage';
import { WordBook } from '../WordBook';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { SignUpForm } from '../SingUpForm';
import { RequireAuth } from '../RequireAuth';


export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="WordBook" element={
                  <RequireAuth>
                    <WordBook/>
                  </RequireAuth>
                }/>
                <Route path='*' element={<Navigate to={'/'} replace/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
