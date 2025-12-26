import React from 'react';

export const MainContainer = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen   bg-zinc-50  ">
      {header}
      <main className="  flex h-screen w-full dark:bg-black ">
        <section className=" w-full h-11/12 mt-10 ">{children}</section>
      </main>
    </div>
  );
};
