import Link from 'next/link';
import * as React from 'react';
import styles from './NestedLayout.module.css';

export interface NestedPageHeaderProps {
    title: string
}

export default function NestedPageHeader(props: NestedPageHeaderProps) {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.title}>{props.title}</h1>
                <div className={styles.breadcrumb}>
                    <Link href={'/'}>Home</Link>
                    <span>/</span>
                    <span>{props.title}</span>
                </div>
            </div>
        </div>
    );
}
