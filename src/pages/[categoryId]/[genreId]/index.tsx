import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface GenrePageProps {}

export default function GenrePage(props: GenrePageProps) {
    const router = useRouter();

    const categoryId = router.query.categoryId;
    const genreId = router.query.genreId;

    return (
        <div>
            <h1>GenrePage</h1>
            <p>{JSON.stringify(router.query)}</p>

            <nav>
                <Link
                    href={`/${categoryId}/${genreId}/details?id=${101}`}
                >{`Media id: ${101}`}</Link>
                <Link
                    href={`/${categoryId}/${genreId}/details?id=${102}`}
                >{`Media id: ${102}`}</Link>
                <Link
                    href={`/${categoryId}/${genreId}/details?id=${103}`}
                >{`Media id: ${103}`}</Link>
                <Link
                    href={`/${categoryId}/${genreId}/details?id=${104}`}
                >{`Media id: ${104}`}</Link>
                <Link
                    href={`/${categoryId}/${genreId}/details?id=${105}`}
                >{`Media id: ${105}`}</Link>
            </nav>
        </div>
    );
}
