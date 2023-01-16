import aboutImage from '@/assets/images/about.png';
import PageTitle from '@/components/partial/PageTitle';
import NestedLayout from '@/layouts/NestedLayout';
import Image from 'next/image';
import * as React from 'react';
import { GoCheck } from 'react-icons/go';
import styles from '@/styles/About.module.css';
export interface AboutProps {}

function About(props: AboutProps) {
    return (
        <div className={styles.container}>
            <PageTitle title={'about us'} subtitle={'serving since 1950'} />
            <div className={styles.content}>
                <div className={styles.section}>
                    <h1>Our Story</h1>
                    <h5>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                    <p>
                        Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos
                        diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est
                        justo sit ut. Labor diam sed ipsum et eirmod
                    </p>
                    <span className={styles.details}>Learn More</span>
                </div>
                <div className={styles.section}>
                    <div className="position-relative h-100">
                        <Image src={aboutImage} alt={'about'} placeholder={"blur"}/>
                    </div>
                </div>
                <div className={styles.section}>
                    <h1>Our Vision</h1>
                    <p>
                        Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor
                    </p>
                    <h5>
                        <GoCheck className={styles.check} />
                        Lorem ipsum dolor sit amet
                    </h5>
                    <h5>
                        <GoCheck className={styles.check} />
                        Lorem ipsum dolor sit amet
                    </h5>
                    <h5>
                        <GoCheck className={styles.check} />
                        Lorem ipsum dolor sit amet
                    </h5>
                    <span className={styles.details}>Learn More</span>
                </div>
            </div>
        </div>
    );
}

About.getLayout = function getLayout(page: React.ReactElement) {
    return <NestedLayout title={'About Us'}>{page}</NestedLayout>;
};

export default About;
