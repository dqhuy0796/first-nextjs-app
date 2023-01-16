import * as React from 'react';
import styles from './PageTitle.module.css';

export interface PageTitleProps {
    title: string,
    subtitle: string
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <div className={styles.title}>
            <h4>{props.title}</h4>
            <h1>{props.subtitle}</h1>
        </div>
    );
}
