import Image from 'next/image';
import ScrollSnap from './components/scroll-snap/scroll-snap.component';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import ContactSection from './components/contact-section/contact-section.component';

const HomePage = () => {
  return (
    <main>
      <div className='flex'>
        <div>
          <div className='fixed pulse left-2  h-[25.5vh] w-[0.1rem] bottom-25 bg-purple'></div>
        </div>
        <ScrollSnap>
          <section className='hero z-5'>
            <div className='relative top-[7.3rem] h-[80vh]'>
              <div className='space-y-2'>
                <div className='text-gray opacity-[0.15]'>{`<h1>`}</div>
                <h1 className='pl-4 tracking-wide text-4xl md:text-6xl'>
                  blvk<span className='text-purple'>.rabbit()</span>
                </h1>
                <div className='text-gray opacity-[0.15]'>{`</h1>`}</div>
              </div>
              <h2 className='mt-2 tracking-widest font-semibold'>
                Frontend
                <span className='text-purple'> /</span> Backend Developer
              </h2>
              <div className='absolute bottom-0 flex justify-center items-center w-full text-5xl'>
                <Link href='#works'>
                  <Icon
                    className='text-purple'
                    icon='fluent:chevron-down-20-filled'
                  />
                </Link>
              </div>
            </div>
          </section>
          {/* <WorkSection works={projects.data} /> */}
          {/* <AboutSection />
           */}
          <ContactSection />
        </ScrollSnap>
      </div>
    </main>
  );
};

export default HomePage;
