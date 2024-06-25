'use client';

import Head from 'next/head';
import { useState } from 'react';
import { JokeGenerator } from '@/components/joke-generator';
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="mx-auto w-full h-screen p-24 flex flex-col">
      <div className="p-4 m-4">
        <JokeGenerator />
      </div>
    </main>
  );
}
