'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z
  .object({
    name: z.string().min(1, {
      message: 'Name is required',
    }),
    email: z
      .string()
      .min(1, {
        message: 'Email is required',
      })
      .email({ message: 'Please enter a valid email' }),
    password: z.string().min(1, {
      message: 'Password is required',
    }),
    confirmPassword: z.string().min(1, {
      message: 'Confirm password is required',
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      });
    }
  });

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        ...values,
      }),
    });
  }
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='space-y-4 max-w-lg mx-auto'
    >
      <div className='font-bold text-2xl tracking-wide'>Register</div>
      <div className='space-y-2'>
        <label className='font-semibold block' htmlFor='name'>
          Name
        </label>
        <input
          placeholder='Enter your name'
          type='text'
          className='focus:outline-none w-full p-2 rounded border border-pale-silver'
          {...form.register('name')}
        />
      </div>
      <div className='space-y-2'>
        <label className='font-semibold block' htmlFor='email'>
          Email
        </label>
        <input
          placeholder='Enter your email'
          type='text'
          className='focus:outline-none w-full p-2 rounded border border-pale-silver'
          {...form.register('email')}
        />
      </div>
      <div className='space-y-2'>
        <label className='font-semibold block' htmlFor='password'>
          Password
        </label>
        <input
          placeholder='Enter your password'
          type='password'
          className='focus:outline-none w-full p-2 rounded border border-pale-silver'
          {...form.register('password')}
        />
      </div>
      <div className='space-y-2'>
        <label className='font-semibold block' htmlFor='password'>
          Confirm Password
        </label>
        <input
          placeholder='Enter your confirm password'
          type='password'
          className='focus:outline-none w-full p-2 rounded border border-pale-silver'
          {...form.register('confirmPassword')}
        />
      </div>
      <button className='bg-purple text-white w-full p-2'>Register</button>
    </form>
  );
};

export default RegisterForm;
