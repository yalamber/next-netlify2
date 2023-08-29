import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Test');
    (async () => {
      const req = await fetch(
        'https://main--coruscating-sunburst-b66de9.netlify.app/api/receive-token'
      );
      const data = await req.json();
      console.log(data);
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Test
      </div>
    </main>
  );
}
