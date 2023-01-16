import Link from 'next/link';
import * as React from 'react';
import styles from './NestedLayout.module.css';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { SiYoutube, SiFacebook, SiTiktok, SiInstagram } from 'react-icons/si';

export interface NestedPageFooterProps {}

export default function NestedPageFooter(props: NestedPageFooterProps) {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h4 className={styles.subtitle}>Get In Touch</h4>
                    <p className={styles.info}>
                        <FaMapMarkerAlt />
                        <span>{'123 Street, City, Country'}</span>
                    </p>
                    <p className={styles.info}>
                        <FaPhoneAlt />
                        <span>{'+(84) 345 67890'}</span>
                    </p>
                    <p className={styles.info}>
                        <IoMailOutline />
                        <span>{'info@example.com'}</span>
                    </p>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.subtitle}>Follow Us</h4>
                    <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                    <div className={styles.social}>
                        <div className={styles.icon}>
                            <SiFacebook />
                        </div>
                        <div className={styles.icon}>
                            <SiTiktok />
                        </div>
                        <div className={styles.icon}>
                            <SiInstagram />
                        </div>
                        <div className={styles.icon}>
                            <SiYoutube />
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.subtitle}>Open Hours</h4>
                    <div>
                        <h6>Monday - Friday</h6>
                        <p>8.00 AM - 8.00 PM</p>
                        <h6>Saturday - Sunday</h6>
                        <p>2.00 PM - 8.00 PM</p>
                    </div>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.subtitle}>Newsletter</h4>
                    <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                    <div className={styles.newsletter}>
                        <input type="text" placeholder="Your Email" />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>
                    Copyright &copy; {new Date().getFullYear()} <strong>TheCoffeeHouse</strong>. <span>All Rights Reserved.</span>
                </p>
                <p>
                    Powered by <strong>dqhuy</strong> with <strong>NextJS</strong>
                </p>
            </div>
        </div>
    );
}
