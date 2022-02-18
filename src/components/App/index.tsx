import css from './app.css';
import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import { LandingPage } from '../LandingPage';
import { WordBook } from '../WordBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';


export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="WordBook" element={<WordBook/>}/>
                <Route path='*' element={<LandingPage/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
