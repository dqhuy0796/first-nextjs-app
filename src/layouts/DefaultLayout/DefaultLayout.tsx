import Header from '@/components/partial/Header';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import * as React from 'react';
import styles from './DefaultLayout.module.css';

export interface DefaultLayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
    return (
        <>
            <Header />
            <div className={styles.background}>{props.children}</div>
            <ScrollToTopButton/>
        </>
    );
}
