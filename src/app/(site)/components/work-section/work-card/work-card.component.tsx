import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

import { Project } from '../../../../../../types/project.types';
type Props = {
  work: Project;
};

const WorkCard = ({ work }: Props) => {
  return (
    <div className='relative'>
      <Link href={work.websiteURL} target='_blank'>
        <Image
          src={work.imageURL}
          height={250}
          width={250}
          className='w-full h-[14rem]'
          alt='Coffee Collection'
          unoptimized
        />
      </Link>
      <div className='stack absolute top-[11.5rem] opacity-[0.8] right-0 p-2 bg-black w-full'>
        <div className='flex space-x-2 justify-end'>
          {work.stack.map((s, id) => {
            return (
              <div key={id}>
                <StackIcon stackItem={s} />
              </div>
            );
          })}
        </div>
      </div>
      <div className='mt-2 flex  py-2 justify-between items-center'>
        <h3 className='font-semibold'>{work.title}</h3>
        <div className='flex items-center space-x-2'>
          <a href={work.githubURL} target='_blank'>
            <Icon icon='typcn:social-github' className='text-3xl' />
          </a>
          <a href={work.websiteURL} target='_blank'>
            <Icon icon='fe:browser' className='text-2xl' />
          </a>
        </div>
      </div>
      <hr className='border-b border-gray opacity-[0.15]' />
      <p className='description mt-2 text-md'>{work.description}</p>
    </div>
  );
};

type StackProps = {
  stackItem: string;
};

const StackIcon = ({ stackItem }: StackProps) => {
  if (stackItem.toLowerCase() === 'react') {
    return (
      <Icon
        className='text-2xl opacity-[1]'
        icon='vscode-icons:file-type-reactjs'
      />
    );
  } else if (stackItem.toLowerCase() === 'tailwindcss') {
    return (
      <Icon
        className='text-2xl  opacity-[1]'
        icon='vscode-icons:file-type-tailwind'
      />
    );
  }
};
export default WorkCard;
