import {NavLink} from '@/components/NavLink';

export default function MyHeader () {
    return <div className="flex flex-row gap-4">
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/posts/post-1'}>Post 1 </NavLink>
        <NavLink href={'/posts/post-2'}>Post 2</NavLink>
    </div>
}
