// this is used for details view for each led in the list

'use client';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
      <div className='relative h-2/4 w-2/4 overflow-auto rounded-xl bg-neutral-100 p-6 shadow-lg'>
        <button
          className='absolute top-4 left-4 text-gray-500 hover:text-gray-800'
          onClick={onClose}
        >
          <X className='h-6 w-6' />
        </button>
        {children}
      </div>
    </div>
  );
}
