import ScrollSnapSection from '../scroll-snap/scroll-snap-section/scroll-snap-section.component';

const AboutSection = () => {
  return (
    <ScrollSnapSection title={'about'}>
      <div className='text-2xl mb-4 font-semibold tracking-widest'>
        <span className='text-gray opacity-[0.15]'>.</span>about
        <span className='text-gray opacity-[0.15]'>()</span>
      </div>
      <p className='max-w-prose'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, odio
        officia cumque eius, nihil, voluptatem omnis vel enim eveniet culpa
        dolor! Modi blanditiis id error culpa ducimus magni provident
        aspernatur?
      </p>
    </ScrollSnapSection>
  );
};

export default AboutSection;
