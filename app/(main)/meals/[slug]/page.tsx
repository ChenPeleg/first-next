import { mealsService } from '@/lib/meals.service';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function MealDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const meal = mealsService.getMeal(slug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className="flex py-8 px-4 gap-12 m-auto max-w-[75rem]">
                <div className="relative w-[30rem] h-[20rem]">
                    <Image src={meal.image} alt={meal.title} fill className="object-cover rounded-lg shadow-md" />
                </div>
                <div className="pt-2 text-[#ddd6cb] max-w-[40rem]">
                    <h1 className="text-5xl uppercase font-bold mb-4 tracking-widest text-[#ddd6cb] shadow-[#1c1917]">{meal.title}</h1>
                    <p className="text-2xl text-[#cfa69b] italic">
                        by <a href={`mailto:${meal.creator_email}`} className="bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent font-bold hover:text-[#fdba74] hover:shadow-md">{meal.creator}</a>
                    </p>
                    <p className="text-xl leading-[1.5] mt-4">{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className="text-xl leading-[1.5] bg-[#6b4f3b] text-[#1c1917] rounded-lg shadow-md p-8 max-w-[60rem] my-8 mx-auto" dangerouslySetInnerHTML={{
                    __html: meal.instructions,
                }}></p>
            </main>
        </>
    );
}
