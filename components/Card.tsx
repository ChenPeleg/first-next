'use client';

import {useEffect} from 'react';

export const Card = ({ title, content }: { title: string; content: string }) => {

    useEffect(() => {
        console.log('abc')
    }, []);
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
