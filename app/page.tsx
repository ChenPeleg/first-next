import Link from 'next/link';
import {MainContainer} from '@/containers/MainContainer';

export default function Home() {

    return (<MainContainer>


            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    First - next
                </h1>
                <Link href={'about'}>About</Link>
                <Link href={'posts/post-1'}>Post 1 </Link>
                <Link href={'posts/post-2'}>Post 2</Link>

            </div>

        </MainContainer>);
}
