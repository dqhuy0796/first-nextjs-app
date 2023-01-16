import * as React from 'react';
import {SiCoffeescript} from 'react-icons/si'
import styles from './Logo.module.css';

export interface LogoProps {}

export default function Logo(props: LogoProps) {
    return (
        <div className={styles.logo}>
            <span><SiCoffeescript/></span>
        </div>
    );
}
