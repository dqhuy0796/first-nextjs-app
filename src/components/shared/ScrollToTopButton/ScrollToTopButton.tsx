import { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import styles from './ScrollToTopButton.module.css';

export interface ScrollToTopButtonProps {}

export default function ScrollToTopButton(props: ScrollToTopButtonProps) {
    const [showing, setShowing] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleShowingButton = () => {
        if (window.pageYOffset > 100) {
            setShowing(true);
        } else {
            setShowing(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleShowingButton);

        return () => window.removeEventListener('scroll', handleShowingButton);
    }, []);

    return (
        <button
            className={`${styles.button} ${showing ? styles.showing : ''}`}
            onClick={handleScrollToTop}
            title={'scroll to top'}
        >
            <BiArrowToTop />
        </button>
    );
}
