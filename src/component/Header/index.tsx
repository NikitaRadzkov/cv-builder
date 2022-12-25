import React from 'react';
import styles from './header.module.scss';

export default function Header() {
    return (
        <div>
            <div>
                <img src="/images/innowise.png" alt="company logo" className={styles.logoImg} />
            </div>
            <div className={styles.horizontalLine} />
        </div>
    );
}
