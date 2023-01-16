import NestedLayout from '@/layouts/NestedLayout';
import * as React from 'react';
import styles from '@/styles/Menu.module.css';
import PageTitle from '@/components/partial/PageTitle';
import Image from 'next/image';
import itemImage1 from '@/assets/images/menu-1.jpg'
import itemImage2 from '@/assets/images/menu-2.jpg'
import itemImage3 from '@/assets/images/menu-3.jpg'
export interface MenuProps {}

function Menu(props: MenuProps) {
    const menu = {
        hotDrink: {
            title: 'Hot Drink',
            items: [
                {
                    name: 'Hot Black Coffee',
                    description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
                    price: 5,
                    image: itemImage1,
                },
                {
                    name: 'Hot Chocolate Coffee',
                    description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
                    price: 5,
                    image: itemImage2,
                },
                {
                    name: 'Hot Milk Coffee',
                    description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
                    price: 5,
                    image: itemImage3,
                },
            ],
        },
        coldDrink: {
            title: 'Cold Drink',
            items: [
                {
                    name: 'Ice Black Coffee',
                    description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
                    price: 5,
                    image: itemImage1,
                },
                {
                    name: 'Ice Chocolate Coffee',
                    description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
                    price: 5,
                    image: itemImage2,
                },
                {
                    name: 'Ice Milk Coffee',
                    description: 'Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor',
                    price: 5,
                    image: itemImage3,
                },
            ],
        },
    };
    return (
        <div className={styles.container}>
            <PageTitle title={'menu & pricing'} subtitle={'competitive pricing'} />
            <div className={styles.content}>
                <div className={styles.list}>
                    <h3 className={styles.title}>{menu.hotDrink.title}</h3>
                    <ul>
                        {menu.hotDrink.items.map((item, index) => (
                            <li key={index}>
                                <MenuItem data={item} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.list}>
                    <h3 className={styles.title}>{menu.coldDrink.title}</h3>
                    <ul>
                        {menu.coldDrink.items.map((item, index) => (
                            <li key={index}>
                                <MenuItem data={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

Menu.getLayout = function getLayout(page: React.ReactElement) {
    return <NestedLayout title={'Menu'}>{page}</NestedLayout>;
};

export default Menu;

interface MenuItemProps {
    data: {
        name: string;
        description: string;
        price: number;
        image: any;
    };
}
const MenuItem = (props: MenuItemProps) => (
    <div className={styles.item}>
        <div className={styles.image}>
            <Image src={props.data.image} alt={props.data.name} placeholder={'blur'} />
            <span className={styles.pricetag}>${props.data.price}</span>
        </div>
        <div className={styles.text}>
            <h3 className={styles.name}>{props.data.name}</h3>
            <p className={styles.description}>{props.data.description}</p>
        </div>
    </div>
);
