'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Project } from '../../../../../../types/project.types';
import { Icon } from '@iconify/react/dist/iconify.js';

type Props = {
  projects: Project[];
};

const ProjectList = ({ projects }: Props) => {
  const router = useRouter();
  const [filteredProjects, setFilteredProjects] = useState<Project[] | []>(
    projects
  );

  const handleDelete = async (id: string) => {
    const resp = await fetch(
      '/api/project?' +
        new URLSearchParams({
          id: id,
        }).toString(),
      {
        method: 'DELETE',
      }
    );
    const data = await resp.json();
    router.refresh();
  };
  return (
    <div>
      {projects.map((p: Project) => (
        <div
          key={p.id}
          className='flex border-b p-2 border-gray justify-between items-center'
        >
          <h3 className='text-2xl'>{p.title}</h3>
          <div className='flex space-x-4 text-lg'>
            <Link className='block' href={`/admin/projects/edit/${p.id}`}>
              <Icon icon='material-symbols:edit' />
            </Link>
            <button className='block' onClick={() => handleDelete(p.id)}>
              <Icon icon='mdi:trash-can' />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
