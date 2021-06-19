import { useState, useEffect } from 'react';
import EventEmitter from 'events';

export const COLORS = [
  'blue',
  'orange',
  'green',
  'purple',
  'yellow',
  'pink',
  'red',
] as const;

export type Color = typeof COLORS[number];

export type Move = [number, number, number, number];
export interface GameState {
  status: unknown;
  turnsLeft: number;
  moves: { move: Move; hit: number; blow: number }[];
}

export default class Gameengine extends EventEmitter {
  goal: Move;

  moveHistory: { move: Move; hit: number; blow: number }[];

  constructor() {
    super();
    this.goal = [
      Math.floor(Math.random() * COLORS.length),
      Math.floor(Math.random() * COLORS.length),
      Math.floor(Math.random() * COLORS.length),
      Math.floor(Math.random() * COLORS.length),
    ];
    this.moveHistory = [];
  }

  makeMove(move: Move): void {
    const goal = new Array<number | null>(...this.goal);
    let hit = 0;
    let blow = 0;

    for (let i = 0; i < move.length; i++) {
      if (move[i] === goal[i]) {
        hit += 1;
      }
      const goalIndex = goal.indexOf(move[i]);
      if (goalIndex >= 0) {
        blow += 1;
        goal[goalIndex] = null;
      }
    }
    blow -= hit;

    this.moveHistory.push({ move, hit, blow });
    this.emit('state', {
      status: undefined,
      turnsLeft: NaN,
      moves: [...this.moveHistory],
    });
  }
}

export function useGameengine(): {
  gameState: GameState;
  makeMove: (move: Move) => void;
} {
  const [gameState, setGameState] = useState<GameState>({
    status: undefined,
    turnsLeft: NaN,
    moves: [],
  });
  const [makeMove, setMakeMove] = useState<(move: Move) => void>(
    () => () => {},
  );
  useEffect(() => {
    const gameEngine = new Gameengine();
    console.log(gameEngine);
    const updateState = (state: GameState) => setGameState(state);
    gameEngine.on('state', updateState);
    setMakeMove(() => gameEngine.makeMove.bind(gameEngine));
    return () => {
      gameEngine.off('state', updateState);
    };
  }, []);
  return {
    gameState,
    makeMove,
  };
}
