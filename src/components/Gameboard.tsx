import React, { useCallback } from 'react';
import { GameState, Move } from 'src/Gameengine';

interface Props {
  gameState: GameState;
  commitMove: (move: Move) => void;
}

export default function Gameboard({
  gameState,
  commitMove,
}: Props): JSX.Element {
  console.log(gameState);
  const submitTestMove = useCallback(() => {
    commitMove([2, 1, 2, 2]);
  }, [commitMove]);
  return (
    <>
      <div id="gameboard">
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
        <div className="cell" />
      </div>
      <button type="button" onClick={submitTestMove}>
        Submit test move
      </button>
    </>
  );
}
