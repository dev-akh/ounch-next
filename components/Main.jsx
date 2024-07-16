'use client';
import { useState } from 'react';
import Items from '@/components/Items';

export default function Main() {

  return (
    <div>
      <div className='bg-blue-700 py-10 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold text-white sm:text-5xl md:text-5xl'>
              List of the perfect items
            </h2>
            <p className='my-4 text-xl text-white'>
              Discover the perfect item that you want.
            </p>
          </div>
        </div>
      </div>
      <Items/>
    </div>
  );
}
