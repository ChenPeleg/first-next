'use client';
import Link from 'next/link';
import {usePathname} from '@/node_modules/next/navigation';
import {ReactNode} from 'react';

export const NavLink = ({
                            href,
                            children
                        }: { href: string; children: ReactNode }) => {
    const p = usePathname()
    const isActive = p.startsWith(href)

    return (<div className={'flex flex-col'}>
        <Link href={href}  >{children}
        </Link>
        <div className={ ` ${p.startsWith(href) ? ' opacity-90  ' : ' opacity-0'} w-full h-0.5 -mt-0.5 transition-all duration-100 bg-sky-500 ` } ></div>
    </div>)
}
