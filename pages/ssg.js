import React from 'react';
import { getRandomPhoto } from '../data/api';
import Image from 'next/image';

const SSG = ({ photo }) => {
    return (
        <div>
            <h1>{photo.title}</h1>
            <Image
                src={photo.url + '.png'}
                alt={photo.title}
                width={500}
                height={500}
                priority />
        </div>
    );
};

export async function getStaticProps() {
    let photo;
    try {
        photo = await getRandomPhoto();
    } catch (error) {
        return {
            notFound: true
        }
    }
    if (!photo) {
        return {
            notFound: true
        }; ``
    }
    return {
        props: {
            photo
        }
    };
}

export default SSG;