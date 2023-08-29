'use client';

import { useEffect } from 'react';

export default function Test() {
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
  return <>Test</>;
}
