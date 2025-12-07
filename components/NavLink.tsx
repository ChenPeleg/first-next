'use client';
import Link from 'next/link';
import {usePathname} from '@/node_modules/next/navigation';
import {ReactNode} from 'react';

export const NavLink = ({
                            href,
                            children
                        }: { href: string; children: ReactNode }) => {
    const p = usePathname()
    return (<Link href={href}>{children}</Link>)
}
