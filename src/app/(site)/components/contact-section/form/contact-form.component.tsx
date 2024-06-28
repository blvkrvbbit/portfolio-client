'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({ message: 'Please enter a valid email' }),
  content: z.string().min(1, {
    message: 'Please enter some details of your inquiry',
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      content: '',
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const response = await fetch(`/api/message`, {
      method: 'POST',
      body: JSON.stringify({
        ...values,
      }),
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='space-y-4 max-w-md mx-auto'
    >
      <div className='font-bold text-2xl tracking-wide'>Get in touch</div>
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
        <label className='font-semibold block ' htmlFor='email'>
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
        <label className='font-semibold block ' htmlFor='content'>
          Inquiry
        </label>
        <textarea
          placeholder='Enter details for your inquiry'
          className='focus:outline-none w-full border border-pale-silver p-2 h-40'
          {...form.register('content')}
        />
        <button className='text-snow w-full rounded border border-purple p-2 font-semibold tracking-widest'>
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
