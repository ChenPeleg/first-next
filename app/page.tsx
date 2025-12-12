import {MainContainer} from '@/containers/MainContainer';
import {NavLink} from '@/components/NavLink';
import {mealsService} from '@/lib/meals.service';
import {Meal} from '@/models/Meal';

export default function Home() {
    const meals = mealsService.getMeals();

    return (<MainContainer header={  <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        First - next
    </h1>}>

                <NavLink href={'about'}>About</NavLink>
                <NavLink href={'posts/post-1'}>Post 1 </NavLink>
                <NavLink href={'posts/post-2'}>Post 2</NavLink>

                <h2 className="mt-8 text-2xl font-semibold text-black dark:text-zinc-50">Meals</h2>
                {meals.map((meal: Meal) => (
                    <NavLink key={meal.slug} href={`meals/${meal.slug}`}>{meal.title}</NavLink>
                ))}

        </MainContainer>);
}
