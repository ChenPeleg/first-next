import {mealsService} from '@/lib/meals.service';

export default async function MealsPage(props: Record<string, any>) {
    const params = await props.params;
    const meals = mealsService.getMeals();

    return (<div className={'bg-amber-200 w-full h-full'}>
            <h1> Meals page</h1>
        </div>);
}
