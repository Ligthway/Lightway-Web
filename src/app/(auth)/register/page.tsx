'use client';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { z } from 'zod';

const schema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z
      .string()
      .min(1, 'Email is required')
      .refine(validator.isEmail, { error: 'Invalid email address' }),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .refine(validator.isStrongPassword, { error: 'Password must be strong' }),
    repeatPassword: z.string().min(1, 'Repeat password is required')
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must match',
    path: ['repeatPassword']
  });

export default function () {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: ''
    },
    mode: 'onBlur'
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log('Form submitted:', data);
    // Here you can handle the form submission, e.g., send data to an API
  }

  return (
    <AuthLayout title={'Register'} form={form} onSubmit={onSubmit}>
      <FormField
        control={form.control}
        name='firstName'
        render={({ field }) => (
          <FormItem>
            <FormLabel>First name</FormLabel>
            <FormControl>
              <Input placeholder='john' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='lastName'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last name</FormLabel>
            <FormControl>
              <Input placeholder='Doe' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder='john@email.com' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='password'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input
                placeholder='strong password'
                {...field}
                type={'password'}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='repeatPassword'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Repeat password</FormLabel>
            <FormControl>
              <Input placeholder='repeat password' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type='submit' className={'w-full'}>
        Submit
      </Button>
    </AuthLayout>
  );
}
