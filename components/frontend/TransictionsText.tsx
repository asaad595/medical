'use client'

import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';




export const TransictionsText = ( { TEXTS , className}:{TEXTS:string[], className:string}) => {
  const [index, setIndex] =useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className={className} >
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
  );}