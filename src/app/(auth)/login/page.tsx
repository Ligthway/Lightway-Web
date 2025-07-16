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

const schema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .refine(validator.isEmail, { error: 'Invalid email address' }),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .refine(validator.isStrongPassword, { error: 'Password must be strong' })
});

export default function () {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur'
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log('Form submitted:', data);
    // Here you can handle the form submission, e.g., send data to an API
  }

  return (
    <AuthLayout title={'Login'} form={form} onSubmit={onSubmit}>
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
      <Button type='submit' className={'w-full'}>
        Submit
      </Button>
    </AuthLayout>
  );
}
