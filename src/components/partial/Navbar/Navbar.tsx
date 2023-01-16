import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import Logo from '../Logo';
import styles from './Navbar.module.css';

interface NavItem {
    path: string;
    title: string;
}

export interface NavbarProps {}

const navigation: Array<NavItem> = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/service',
        title: 'Service',
    },
    {
        path: '/menu',
        title: 'Menu',
    },
    {
        path: '/about',
        title: 'About',
    },
    {
        path: '/contact',
        title: 'Contact',
    },
];

export default function Navbar(props: NavbarProps) {
    const router = useRouter();
    return (
        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <ul>
                {navigation.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.path}
                            className={`${styles.navlink} ${router.asPath === item.path ? styles.active : ''}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
