import serviceImage1 from '@/assets/images/service-1.jpg';
import serviceImage2 from '@/assets/images/service-2.jpg';
import serviceImage3 from '@/assets/images/service-3.jpg';
import serviceImage4 from '@/assets/images/service-4.jpg';
import PageTitle from '@/components/partial/PageTitle';
import NestedLayout from '@/layouts/NestedLayout';
import styles from '@/styles/Service.module.css';
import Image, { StaticImageData } from 'next/image';
import * as React from 'react';
import { BsJournalCheck } from 'react-icons/bs';
import { FaAward, FaCoffee } from 'react-icons/fa';
import { GrDeliver } from 'react-icons/gr';

export interface ServiceProps {}

function Service(props: ServiceProps) {
    const content = [
        {
            title: 'Fastest Door Delivery',
            description:
                'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolorsed est sit invidunt, dolore tempor diam ipsum takima erat tempor',
            icon: <GrDeliver />,
            image: serviceImage1,
        },
        {
            title: 'Fresh Coffee Beans',
            description:
                'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolorsed est sit invidunt, dolore tempor diam ipsum takima erat tempor',
            icon: <FaCoffee />,
            image: serviceImage2,
        },
        {
            title: 'Best Quality Coffee',
            description:
                'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolorsed est sit invidunt, dolore tempor diam ipsum takima erat tempor',
            icon: <FaAward />,
            image: serviceImage3,
        },
        {
            title: 'Online Table Booking',
            description:
                'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolorsed est sit invidunt, dolore tempor diam ipsum takima erat tempor',
            icon: <BsJournalCheck />,
            image: serviceImage4,
        },
    ];

    return (
        <div className={styles.container}>
            <PageTitle title={'our services'} subtitle={'fresh & organic beans'} />
            <div className={styles.content}>
                {content.map((item, index) => (
                    <ServiceContentSection key={index} data={item} />
                ))}
            </div>
        </div>
    );
}

Service.getLayout = function getLayout(page: React.ReactElement) {
    return <NestedLayout title={'Services'}>{page}</NestedLayout>;
};

export default Service;

interface ServiceContentSectionProps {
    data: {
        title: string;
        description: string;
        icon: React.ReactNode;
        image: StaticImageData;
    };
}

const ServiceContentSection = (props: ServiceContentSectionProps) => (
    <div className={styles.section}>
        <div className={styles.image}>
            <Image src={props.data.image} alt={props.data.title} placeholder={"blur"}/>
        </div>
        <div className={styles.text}>
            <h4>
                <span className={styles.icon}>{props.data.icon}</span>
                <span className={styles.title}>{props.data.title}</span>
            </h4>
            <p>{props.data.description}</p>
        </div>
    </div>
);
