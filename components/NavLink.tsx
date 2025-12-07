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
        <Link href={href} className={` ${p.startsWith(href) ? 'underline underline-sky-500' : ''} `}>{children}
        </Link>
        <div className={ ` ${p.startsWith(href) ? 'underline  bg-sky-500 ' : ''} w-full h-0.5 -mt-1` } ></div>
    </div>)
}
