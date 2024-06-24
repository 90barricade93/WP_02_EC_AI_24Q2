'use client';

import Head from 'next/head';
import { useState } from 'react';
import { JokeGenerator } from '@/components/joke-generator';
import { useChat } from 'ai/react';
function JokePage() {
  return (
    <div className="h-screen w-screen bg-black text-white flex justify-center items-center">
      <JokeGenerator />
    </div>
  );
}

export default JokePage;
