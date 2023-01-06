import React from 'react';
import { getRandomPhoto } from '../data/api';
import Image from 'next/image';



const SSR = ({ photo }) => {
    return (
        <div>
            <h1>{photo.title}</h1>
            <Image
                src={photo.url + '.jpg'}
                alt={photo.title}
                width={345}
                height={500}
                priority
            />
        </div>
    );
};

export async function getServerSideProps() {
    let photo;
    try {
        photo = await getRandomPhoto();
    } catch (e) {
        /**
         * If something goes wrong, we return a 404 page
         */
        return {
            notFound: true,
        };
    }

    if (!photo) {
        /**
         * If we don't get a `photo` back, we return a 404 page
         */
        return {
            notFound: true,
        };
    }

    return {
        props: {
            photo,
        },
    };
}

export default SSR;