import React from 'react';
import { PageProperties } from '@/models/PageProperties';
import dumplings from '@/assets/images/dumplings.jpg';
import { Image } from '@/node_modules/next/dist/client/image-component';
import { Card } from '@/components/Card';
import { mealsService } from '@/lib/meals.service';

export default function MealsPage(props: PageProperties<'/posts/[slug]'>) {
  const postName = React.use(props.params);
  const meals = mealsService.getMeals();
  console.log(meals);

  return (
    <div className={'flex w-full flex-col items-center justify-center mt-20'}>
      <h1> {postName.slug} </h1>
      <Image
        src={dumplings}
        className={'w-96'}
        alt={'dumplings'}
        priority={true}
      />
      <p>This is the posts page content.</p>
      <Card
        title={' Post Card'}
        content={'This is a card component inside the post page.'}
      ></Card>
    </div>
  );
}
