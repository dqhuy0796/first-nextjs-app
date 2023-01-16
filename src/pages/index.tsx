import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import SwiperBanner from '@/components/partial/SwiperBanner'
import About from './about';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>The Coffee House</title>
                <meta name="description" content="Powered by NextJS" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <SwiperBanner/>
                <About/>
            </main>
        </>
    );
}
