import * as React from 'react';
import NestedPageFooter from './NestedPageFooter';
import NestedPageHeader from './NestedPageHeader';
import styles from './NestedLayout.module.css';

export interface NestedLayoutProps {
    children: React.ReactNode;
    title: string;
}

export default function NestedLayout(props: NestedLayoutProps) {
    return (
        <>
            <NestedPageHeader title={props.title} />
            <div className={styles.main}>{props.children}</div>
            <NestedPageFooter />
        </>
    );
}
