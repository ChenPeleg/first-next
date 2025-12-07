import React  from 'react';
import {PageProperties} from '@/models/PageProperties';
import dumplings from '@/assets/images/dumplings.jpg';


export default function PostsPage(props: PageProperties<'/posts/[slug]'>) {
    const postName = React.use(props.params);

    return (<div>
        <h1> {postName.slug}  </h1>
        <img src={dumplings.src} alt={'dumplings'} />
        <p>This is the posts page content.</p>
    </div>);
}
