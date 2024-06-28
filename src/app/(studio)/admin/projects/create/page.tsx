import ProjectForm from '../form/form.component';

const CreateProjectPage = () => {
  return (
    <div className='max-w-lg mx-auto'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-semibold'>Create Project</h1>
      </div>
      <div className='mt-8'>
        <ProjectForm />
      </div>
    </div>
  );
};

export default CreateProjectPage;
