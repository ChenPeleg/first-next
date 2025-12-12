import React from 'react';
import Link from 'next/link';

const  Navbar: React.FC = () => {
 return(<nav className={'flex flex-row items-center justify-center fixed top-0 w-screen bg-blue-500 h-16'}>
     <h1 className={'text-3xl font-semibold leading-10 tracking-tight text-nowrap  w-max text-black px-4'}> First next </h1>
    <ul className={'flex flex-row items-center justify-center h-full gap-4'}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/meals">Meals</Link></li>
        <li><Link href="/about">About</Link></li>
    </ul>
 </nav>)
}

export default  Navbar
