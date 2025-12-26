import MealItem from './MealItem';
import { Meal } from '@/models/Meal';

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-12 mx-auto my-8 list-none p-0">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

