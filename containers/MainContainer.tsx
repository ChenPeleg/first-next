
import React from 'react';

export const MainContainer = ({ children ,header }:
                              { children: React.ReactNode , header :React.ReactNode }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main
                className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-10 py-10  px-16 bg-white dark:bg-black sm:items-start">
                {header}
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    {children}
                </div>
            </main>
        </div>)
}
