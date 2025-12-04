import Link from 'next/link';
import MyHeader from './header'
import {Card} from '@/components/Card';

export default function Home() {

    return (<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Card title={'my card title'} content={'this is my card content'}/>
            <main
                className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <MyHeader/>
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        First - next
                    </h1>
                    <Link href={'about'}>About</Link>
                    <Link href={'posts/post-1'}>Post 1 </Link>
                    <Link href={'posts/post-2'}>Post 2</Link>

                </div>

            </main>
        </div>);
}
