import ProjectForm from '../../form/form.component';

const EditProjectPage = async ({ params }: { params: { id: string } }) => {
  const req = await fetch(`${process.env.FETCH_URL}/api/project/${params.id}`, {
    cache: 'no-store',
  });
  const project = await req.json();

  return (
    <div className='max-w-lg mx-auto'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-semibold'>Edit Project</h1>
      </div>
      <div className='mt-8'>
        <ProjectForm project={project.data} />
      </div>
    </div>
  );
};

export default EditProjectPage;
