import { mealsService } from '@/lib/meals.service';
import MealsGrid from '@/components/meals/MealsGrid';

export default async function MealsPage() {
    const meals = mealsService.getMeals();

    return (
        <>
            <header className="gap-12 mx-auto my-12 w-[90%] max-w-[75rem] text-2xl text-[#ddd6cb]">
                <h1 className="font-bold text-5xl mb-6 uppercase tracking-widest text-[#d97706]">
                    Delicious meals, created <span className="text-[#f59e0b]">by you</span>
                </h1>
                <p className="m-0 text-2xl text-black">
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className="m-0 text-2xl">
                    <a href="/meals/share" className="inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold no-underline hover:from-[#fdba74] hover:to-[#f97316]">
                        Share Your Favorite Recipe
                    </a>
                </p>
            </header>
            <main>
                <MealsGrid meals={meals} />
            </main>
        </>
    );
}
