import Link from 'next/link';
import ScrollSnapSection from '../scroll-snap/scroll-snap-section/scroll-snap-section.component';

const AboutSection = () => {
  return (
    <ScrollSnapSection title={'about'}>
      <div className='text-2xl mb-4 font-semibold tracking-widest'>
        <span className='text-gray opacity-[0.15]'>.</span>about
        <span className='text-gray opacity-[0.15]'>()</span>
      </div>
      <div className='space-y-4'>
        <p className='max-w-prose'>
          Hi, I&apos;m Jordan Myers, a passionate web developer with a knack for
          creating dynamic and responsive web applications. With extensive
          experience in <span className='text-purple font-semibold'>React</span>
          , <span className='text-purple font-semibold'>Next.js</span>, and
          <span className='text-purple font-semibold'> TypeScript</span>, I
          thrive on building user-friendly interfaces and solving complex
          problems.
        </p>
        <p className='max-w-prose'>
          I believe in the power of teamwork and enjoy collaborating with others
          to bring innovative ideas to life. Outside of coding, you&apos;ll
          often find me at tech meet-ups, staying up-to-date with the latest
          advancements in technology. I&apos;m also a big fan of games and am an
          avid coffee drinker.
        </p>
        <p className='max-w-prose'>
          Whether it&apos;s coding, learning, or just enjoying a good cup of
          coffee, I&apos;m always eager to connect and share experiences.
          Let&apos;s create something amazing together!
        </p>
      </div>
    </ScrollSnapSection>
  );
};

export default AboutSection;
