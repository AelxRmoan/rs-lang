import React from 'react';
import { GameIntro } from '../../GameIntro';

export const Intro = () => {
  return (
    <GameIntro title="Audio Call" gameName="audiocall">
      "Audio Call" is a training that improves listening comprehension.
      Use the mouse to select. Use number keys from 1 to 5
      to select an answer Use space to repeat the word
      Use the Enter key for a hint or to move to the next
      word
    </GameIntro>
  );
};
