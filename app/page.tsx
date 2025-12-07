import Link from 'next/link';
import {MainContainer} from '@/containers/MainContainer';
import {NavLink} from '@/components/NavLink';

export default function Home() {



    return (<MainContainer>


            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    First - next
                </h1>
                <NavLink href={'about'}>About</NavLink>
                <NavLink href={'posts/post-1'}>Post 1 </NavLink>
                <NavLink href={'posts/post-2'}>Post 2</NavLink>

            </div>

        </MainContainer>);
}
