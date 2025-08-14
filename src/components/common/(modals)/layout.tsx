import { Button } from '@/components/ui/button';

export default function ModalLayout({
  setModalOpen,
}: {
  setModalOpen: (open: boolean) => void;
}) {
  return (
    <div>
      <h2 className='mb-4 text-2xl font-bold'>
        Detailed Light Overview
      </h2>
      <p className='mb-4 text-gray-700'>
        This is the larger card content.
      </p>
      <Button onClick={() => setModalOpen(false)}>Close</Button>
    </div>
  );
}


