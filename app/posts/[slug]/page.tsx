import React  from 'react';
import {PageProperties} from '@/models/PageProperties';


export default function PostsPage(props: PageProperties<'/posts/[slug]'>) {
    const r = React.use(props.params);

    return (<div>
        <h1>Posts Page</h1>
        <p>This is the posts page content.</p>
    </div>);
}
