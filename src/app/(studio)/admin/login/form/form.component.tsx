'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({ message: 'Please enter a valid email' }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (!response?.error) {
      router.push('/admin/dashboard');
    }
  }
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='space-y-4 max-w-lg mx-auto'
    >
      <div className='font-bold text-2xl tracking-wide'>Login</div>

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

      <button>Login</button>
    </form>
  );
};

export default LoginForm;
