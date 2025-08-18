import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

export default function ModalLayout({
  setModalOpen
}: {
  setModalOpen: (open: boolean) => void;
}) {
  return (
    <div className='p-5 relative h-full w-full overflow-auto'>
      <h2 className='absolute right-4 text-gray-400 top-0 text-xs font-medium '>
        Last Edit 2d ago
      </h2>
      <div className='mx-3xl max-w-2xl p-4'>
        <div className='space-y-4'>
          <div className='grid grid-cols-6 gap-4'>
            <div className='col-span-3 row-span-2 rounded-lg border border-gray-200 bg-white p-4'>
              <div>
                <img
                  src='/images/Led.png'
                  alt='LED Strip'
                  className='h-40 w-40 object-contain p-0'
                />
                <h1 className='text-black-500 text-3xl font-semibold'>
                  LED Strip 1
                </h1>
              </div>
            </div>

            <div className='col-span-2 rounded-lg border border-gray-200 bg-white p-4'>
              <div className='text-sm text-black-400 font-semibold'>Zone</div>
              <div className='flex items-center gap-2'>
                <span className='text-lg font-bold'>Aisle 14</span>
              </div>
            </div>

            <div className='col-span-1 rounded-lg border border-gray-200 bg-white p-4'>
              <div className='flex-1 p-2'>
                <div className='text-right text-2xl font-bold'>12k</div>
                <div className='text-right text-sm text-black-500 font-semibold'>scans</div>
              </div>
            </div>

            <div className='col-span-1 rounded-lg border border-gray-200 bg-white p-4'>
              <div className='flex-1 p-2'>
                <div className='text-sm text-gray-500'>Last scan</div>
                <div className='font-medium text-green-600'>12m ago</div>
              </div>
            </div>

            <div className='col-span-2 rounded-lg border border-gray-200 bg-white p-4'>
              <div className='flex-1 p-2'>
                <div className='text-sm text-gray-500'>Light ID</div>
                <div className='flex items-center gap-2 bg-neutral-200 rounded-md'>
                  <span className='font-mono text-sm'>LGT-5A3F9C</span>
                  <Button variant='ghost' size='sm' className='p-1'>
                    <Copy className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
