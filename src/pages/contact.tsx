import NestedLayout from '@/layouts/NestedLayout';
import * as React from 'react';
import styles from '@/styles/Contact.module.css';
import PageTitle from '@/components/partial/PageTitle';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import BasicButton from '@/components/shared/BasicButton';

export interface ContactProps {}

function Contact(props: ContactProps) {
    return (
        <div className={styles.container}>
            <PageTitle title={'contact us'} subtitle={'feel free to contact'} />
            <div className={styles.info}>
                <div className={styles.item}>
                    <FaMapMarkerAlt />
                    <p className={styles.subtitle}>{'Address'}</p>
                    <p className={styles.description}>{'123 Street, City, Country'}</p>
                </div>
                <div className={styles.item}>
                    <FaPhoneAlt />
                    <p className={styles.subtitle}>{'Phone'}</p>
                    <p className={styles.description}>{'+(84) 345 67890'}</p>
                </div>
                <div className={styles.item}>
                    <IoMailOutline />
                    <p className={styles.subtitle}>{'Email'}</p>
                    <p className={styles.description}>{'info@example.com'}</p>
                </div>
            </div>
            <div className={styles.direction}>
                <div className={styles.map}>
                    <iframe
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading={'lazy'}
                        allowFullScreen
                        aria-hidden={false}
                        tabIndex={0}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118557.54142216755!2d105.16381272528989!3d21.78323435677336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134adfba5491ee1%3A0x747dc14b37c6b7e9!2sTuy%C3%AAn%20Quang%2C%20Vietnam!5e0!3m2!1sen!2sbd!4v1673887919088!5m2!1sen!2sbd"
                    ></iframe>
                </div>
                <ContactForm />
            </div>
        </div>
    );
}

Contact.getLayout = function getLayout(page: React.ReactElement) {
    return <NestedLayout title={'Contact'}>{page}</NestedLayout>;
};

export default Contact;

const ContactForm = () => (
    <div className={styles.form}>
        <div id="success"></div>
        <div>
            <div className={styles.control}>
                <input type="text" className={styles.input} placeholder="Your Name" required={true} />
                <p className="help-block text-danger"></p>
            </div>
            <div className={styles.control}>
                <input type="email" className={styles.input} placeholder="Your Email" required={true} />
                <p className="help-block text-danger"></p>
            </div>
            <div className={styles.control}>
                <input type="text" className={styles.input} placeholder="Subject" required={true} />
                <p className="help-block text-danger"></p>
            </div>
            <div className={styles.control}>
                <textarea className={styles.input} rows={5} placeholder="Message" required={true}></textarea>
                <p className="help-block text-danger"></p>
            </div>
            <BasicButton>{'Send Message'}</BasicButton>
        </div>
    </div>
);
