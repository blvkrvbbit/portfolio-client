import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import ProjectList from './project-list/project-list.component';

const ProjectsPage = async () => {
  const request = await fetch(`${process.env.FETCH_URL}/api/project`, {
    cache: 'no-store',
  });
  const projects = await request.json();

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-semibold'>Projects</h1>
        <Link href='/admin/projects/create'>
          <Icon className='text-3xl' icon='ei:plus' />
        </Link>
      </div>
      <div className='projects mt-8'>
        {projects && projects.data.length > 0 ? (
          <ProjectList projects={projects.data} />
        ) : (
          <div className='w-full border border-gray text-center p-4'>
            No Projects yet
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
