'use client';

import { useState } from 'react';
import ScrollSnapSection from '../scroll-snap/scroll-snap-section/scroll-snap-section.component';
import WorkCard from './work-card/work-card.component';
import { Project } from '../../../../../types/project.types';

type Props = {
  works: Project[];
};

const WorkSection = ({ works }: Props) => {
  const [filter, setFilter] = useState('all');

  return (
    <ScrollSnapSection title='works'>
      <div className='text-2xl mb-6 font-semibold tracking-widest'>
        <span className='text-gray opacity-[0.15]'>.</span>works
        <span className='text-gray opacity-[0.15]'>()</span>
      </div>
      <div className='mb-4 flex gap-2 flex-wrap'>
        <button
          className={
            filter === 'all'
              ? 'border border-purple px-3 py-1 rounded-full'
              : 'border border-gray opacity-[0.15] px-3 py-1 rounded-full'
          }
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={
            filter === 'react'
              ? 'border border-purple px-3 py-1 rounded-full'
              : 'border border-gray opacity-[0.15] px-3 py-1 rounded-full'
          }
          onClick={() => setFilter('react')}
        >
          React
        </button>
        <button
          className={
            filter === 'next.js'
              ? 'border border-purple px-3 py-1 rounded-full'
              : 'border border-gray opacity-[0.15] px-3 py-1 rounded-full'
          }
          onClick={() => setFilter('next.js')}
        >
          Next.js
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {works.map((w) => (
          <>
            <WorkCard key={w.id} work={w} />
          </>
        ))}
      </div>
    </ScrollSnapSection>
  );
};

export default WorkSection;
