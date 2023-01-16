import Link from 'next/link';
import * as React from 'react';
import styles from './BasicButton.module.css';

export interface BasicButtonProps {
    children: any;
    to?: string;
    href?: string;
    onClick?: Function;
    size?: string;
    shape?: string;
    color?: string;
}

export default function BasicButton(props: BasicButtonProps) {
    let Component: any = 'button';
    let option = {};
    if (props.to) {
        Component = Link;
        option = {
            href: props.to,
        };
    } else if (props.href) {
        Component = 'a';
        option = {
            href: props.href,
            target: '_blank',
            rel: 'noreferrer noopener',
        };
    } else if (props.onClick) {
        option = {
            onClick: props.onClick,
        };
    }

    return (
        <Component
            className={`${styles.button} 
            ${styles[props.size || 'normal']} 
            ${styles[props.shape || 'rounded']} 
            ${styles[props.color || 'primary']}`}
            {...option}
        >
            <span>{props.children}</span>
        </Component>
    );
}
