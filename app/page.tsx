'use client';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header, Footer, Contact, Welcome } from '@/components';

export default function Home() {
  const [animationData, setAnimationData] = useState(null);

  const handleAnimationComplete = (data: any) => {
    setAnimationData(data);
  };

  return (
    <main>
      {animationData ? (
        <>
          <Header />
          {/* <Contact /> */}
          {/* <Footer /> */}
        </>
      ) : (
        <Welcome onAnimationComplete={handleAnimationComplete} />
      )}
    </main>
  );
}
