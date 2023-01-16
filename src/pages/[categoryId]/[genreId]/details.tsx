import { useRouter } from 'next/router';
import * as React from 'react';

export interface MediaDetailsPageProps {
}

export default function MediaDetailsPage (props: MediaDetailsPageProps) {
    const router = useRouter();

    return (
        <div>
            <h1>MediaDetailsPage</h1>
            <p>{JSON.stringify(router.query)}</p>
        </div>
    );
}
