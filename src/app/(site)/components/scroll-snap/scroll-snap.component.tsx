'use client';
import { ReactNode } from 'react';
import './scroll-snap.styles.css';

// Scroll Snap
type Props = {
  children: ReactNode;
};

const ScrollSnap = ({ children }: Props) => {
  return <div className='scroll-snap container mx-auto'>{children}</div>;
};

export default ScrollSnap;
