import Link from 'next/link';
import { useRouter } from 'next/router';

export interface CategoryPageProps {}

export default function CategoryPage(props: CategoryPageProps) {
    const router = useRouter();

    const categoryId = router.query.categoryId

    return (
        <div>
            <h1>CategoryPage</h1>
            <nav>
                <Link href={`/${categoryId}/111`}>Action</Link>
                <Link href={`/${categoryId}/222`}>Drama</Link>
                <Link href={`/${categoryId}/333`}>Animation</Link>
                <Link href={`/${categoryId}/444`}>Comedy</Link>
                <Link href={`/${categoryId}/555`}>Documentary</Link>
            </nav>
            <p>{JSON.stringify(router.query)}</p>
        </div>
    );
}
