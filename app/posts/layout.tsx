import React from 'react';


export default function PostsLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <h1>Posts Layout</h1>

            (<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

            <main
                className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    {children}

                </div>

            </main>
        </div>);
        </div>
    );

}
