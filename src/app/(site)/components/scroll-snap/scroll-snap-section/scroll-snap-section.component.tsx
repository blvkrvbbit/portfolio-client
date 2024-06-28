'use client';
import { ReactNode } from 'react';
import './scroll-snap-section.styles.css';

type Props = {
  title?: string | null;
  children: ReactNode;
};

const ScrollSnapSection = ({ title = null, children }: Props) => {
  if (title) {
    return (
      <section id={title} className={`${title}  pt-24 pb-20`}>
        {children}
      </section>
    );
  }
  return <section className={`pt-24 pb-20`}>{children}</section>;
};

export default ScrollSnapSection;
