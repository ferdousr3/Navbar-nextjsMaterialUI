import React from 'react';
import  Link from 'next/link';

export function Button() {
  return (
    <Link href='/singup' passHref >
      <button className='btn'>Sign Up</button>
    </Link>
  );
}