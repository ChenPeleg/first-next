import Link from 'next/link';
import Image from 'next/image';
import { Meal } from '@/models/Meal';

export default function MealItem({ title, slug, image, summary, creator }: Meal) {
  return (
    <article className="flex flex-col justify-between h-full rounded overflow-hidden shadow-lg bg-amber-500">
      <header>
        <div className="relative w-full h-60">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-xs text-gray-600">by {creator}</p>
        </div>
      </header>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base mb-4">
          {summary}
        </p>
        <div className="text-right">
          <Link href={`/meals/${slug}`} className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

