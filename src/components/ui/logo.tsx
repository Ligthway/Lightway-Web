import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src='/Group 2.png'
      alt='Company Logo'
      width={30}
      height={10}
      priority
    />
  );
}
