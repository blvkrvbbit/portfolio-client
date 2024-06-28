'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { MouseEvent } from 'react';
import { imageUpload } from '../../utils/cloudinary.utils';
import { Project } from '../../../../../../types/project.types';
import Image from 'next/image';

export const contactFormSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  description: z.string().min(1, {
    message: 'Description is required',
  }),
  githubURL: z.string().min(1, {
    message: 'Github url is required',
  }),
  websiteURL: z.string().min(1, {
    message: 'Website uril is required',
  }),
  image: z.any(),
});

type Props = {
  project?: Project;
};
const ProjectForm = ({ project }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      githubURL: project?.githubURL || '',
      websiteURL: project?.websiteURL || '',
    },
  });
  const [stack, setStack] = useState<any>(project?.stack || []);
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    if (!project) {
      const uploadedData = await imageUpload(values.image[0]);
      const response = await fetch('/api/project', {
        method: 'POST',
        body: JSON.stringify({
          ...values,
          stack: stack,
          imageURL: uploadedData.secure_url,
        }),
      });
      const resp = await response.json();
      if (resp.success) {
        router.push('/admin/projects');
        router.refresh();
      }
    } else {
      let data = {};
      if (values.image[0]) {
        const uploadedData = await imageUpload(values.image[0]);
        data = {
          ...values,
          stack: stack,
          imageURL: uploadedData.secure_url,
          oldImageURL: project.imageURL,
        };
      } else {
        data = {
          ...values,
          stack: stack,
          imageURL: project.imageURL,
        };
      }

      const response = await fetch(
        '/api/project?' +
          new URLSearchParams({
            id: project.id,
          }).toString(),
        {
          method: 'PUT',
          body: JSON.stringify({
            ...data,
          }),
        }
      );
      const resp = await response.json();
      if (resp.success) {
        router.push('/admin/projects');
        router.refresh();
      }
    }
  }

  const handleStackSelect = (e: any) => {
    e.preventDefault();

    if (!stack.includes(e.target.value)) {
      setStack([...stack, e.target.value]);
    } else {
      const updatedStack = stack.filter(
        (item: string) => item !== e.target.value
      );
      setStack(updatedStack);
    }
  };
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='grid grid-cols-2 gap-4 w-full mx-auto'
    >
      <div className='space-y-2 col-span-2'>
        <label className='font-medium block' htmlFor='title'>
          Title
        </label>
        <input
          placeholder='Enter your name'
          type='text'
          className='focus:outline-none w-full p-2 rounded border border-pale-silver'
          {...form.register('title')}
        />
      </div>
      <div className='space-y-2 col-span-2'>
        <label className='font-medium block' htmlFor='description'>
          Description
        </label>
        <textarea
          placeholder='Enter a description of the project'
          className='focus:outline-none w-full p-2 rounded border border-pale-silver'
          {...form.register('description')}
        />
      </div>
      <div className='space-y-2'>
        <label className='font-medium block' htmlFor='githubURL'>
          Github URL
        </label>
        <input
          placeholder='Github URL'
          type='text'
          className='focus:outline-none w-full p-2 rounded border border-pale-silver'
          {...form.register('githubURL')}
        />
      </div>
      <div className='space-y-2'>
        <label className='font-medium block' htmlFor='websiteURL'>
          Website URL
        </label>
        <input
          placeholder='Website URL'
          type='text'
          className='focus:outline-none w-full p-2 rounded border border-pale-silver'
          {...form.register('websiteURL')}
        />
      </div>
      <div className='space-y-2 col-span-2'>
        <label className='font-medium block'>Stack</label>
        <div className='flex gap-2'>
          <button
            className={
              stack.includes('react')
                ? 'bg-purple border-purple border text-white px-3 py-1'
                : 'border border-gray px-3 py-1'
            }
            value='react'
            onClick={handleStackSelect}
          >
            React
          </button>
          <button
            className={
              stack.includes('next.js')
                ? 'bg-purple border-purple border text-white px-3 py-1'
                : 'border border-gray px-3 py-1'
            }
            value='next.js'
            onClick={handleStackSelect}
          >
            Next.js
          </button>
        </div>
      </div>
      <div className='space-y-2 col-span-2'>
        <label className='font-medium block' htmlFor='websiteURL'>
          Project Image
        </label>
        {project?.imageURL && (
          <Image
            src={project?.imageURL}
            width={250}
            height={200}
            className='w-full h-[12rem]'
            unoptimized
            alt={project?.title}
          />
        )}
        <input
          type='file'
          className='focus:outline-none w-full p-2 rounded border border-pale-silver'
          {...form.register('image')}
        />
      </div>
      <button className='bg-black w-full text-white p-2 col-span-2'>
        {!project ? 'Create' : 'Update'}
      </button>
    </form>
  );
};

export default ProjectForm;
