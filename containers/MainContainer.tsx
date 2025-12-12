
import React from 'react';

export const MainContainer = ({ children ,header }:
                              { children: React.ReactNode , header :React.ReactNode }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            {header}
            <main
                className="flex min-h-screen w-full flex-row items-center justify-center bg-green-300 gap-10 py-10     dark:bg-black sm:items-start">

                <section className="flex  max-w-3xl w-full   bg-amber-300 flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    {children}
                </section>
            </main>
        </div>)
}
