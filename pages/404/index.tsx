import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import styles from './style.module.scss';

export default function Custom404() {
    return (
        <div className={styles.errPage}>
            <Head>
                <title>404 Not Found</title>
            </Head>

            <div className="container">
                <div className={styles.insideErr}>
                    <h1>404 | Page Not Found</h1>
                    <Link href="/">
                        <a>Home Page</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
