import React from 'react';
import Navbar from '@/components/navbar/AppNavbar';
import {MainContainer} from '@/containers/MainContainer';


export default function PostsLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {

    return (<MainContainer header={<h1 className="max-w-xs text-black dark:text-zinc-50">
        <Navbar/>
    </h1>}>

        {children}

    </MainContainer>)


}
