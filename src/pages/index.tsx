import React from 'react';
import Head from 'next/head';
import Gameboard from 'src/components/Gameboard';
import { useGameengine } from 'src/Gameengine';
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
  const { gameState, makeMove } = useGameengine();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gameboard gameState={gameState} commitMove={makeMove} />
    </div>
  );
}
