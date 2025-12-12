import {MainContainer} from '@/containers/MainContainer';
import {NavLink} from '@/components/NavLink';
import Navbar from '@/components/navbar/AppNavbar';

export default function Home() {

    return (<MainContainer header={<h1 className="max-w-xs text-black dark:text-zinc-50">
       <Navbar/>
    </h1>}>

        <NavLink href={'(main)/about'}>About</NavLink>
        <NavLink href={'posts/post-1'}>Post 1 </NavLink>
        <NavLink href={'posts/post-2'}>Post 2</NavLink>

        <h2 className="mt-8 text-2xl font-semibold text-black dark:text-zinc-50">Meals</h2>
        <NavLink href={'meals/2'}>Meal 2</NavLink>

    </MainContainer>);
}
