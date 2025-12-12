import React from 'react';

const  Navbar: React.FC = () => {
 return(<nav className={'flex flex-row items-center justify-center'}>
     <h1 className={'text-3xl font-semibold leading-10 tracking-tight text-nowrap  w-max text-black px-4'}> First next </h1>
    <ul className={'flex flex-row items-center justify-center h-full gap-4'}>
        <li><a href="">Home</a></li>
        <li><a href="/meals">Meals</a></li>
        <li><a href="/about">About</a></li>
    </ul>
 </nav>)
}

export default  Navbar
