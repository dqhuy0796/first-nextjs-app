import TopBarProgress from '@/components/partial/TopBarProgress';
import DefaultLayout from '@/layouts/DefaultLayout';
import '@/styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    const [progress, setProgress] = useState(false);

    Router.events.on('routeChangeStart', () => {
        setProgress(true);
    });

    Router.events.on('routeChangeComplete', () => {
        setProgress(false);
    });

    return (
        <>
            {progress && <TopBarProgress />}
            <DefaultLayout>{getLayout(<Component {...pageProps} />)}</DefaultLayout>
        </>
    );
}
