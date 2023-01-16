import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import styles from './Header.module.css';

export interface HeaderProps {}

interface MenuItem {
    path: string;
    title: string;
}

const navigation: Array<MenuItem> = [
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

export default function Header(props: HeaderProps) {
    const [isScrolled, setScrolled] = useState(false);

    const handleSetScrolled = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleSetScrolled);

        return () => window.removeEventListener("scroll", handleSetScrolled);
    }, []);

    const router = useRouter();
    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <Navbar/>
        </header>
    );
}
