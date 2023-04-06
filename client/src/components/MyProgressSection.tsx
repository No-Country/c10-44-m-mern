import React, { useState } from 'react';

import { BiLock, BiLockOpen } from 'react-icons/bi';
import styles from '../styles/myprogress.module.css';

interface Section {
    title: string;
    content: React.ReactNode[];
}

function MyProgressSection(props: Section) {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <section >
            <div className={styles.container__section}>
                <p>{props.title}</p>
                <button onClick={toggleCollapse}>{isCollapsed ? <BiLock />
                    : <BiLockOpen />
                }</button>
            </div>
            <div className={styles.container__course}>
                {!isCollapsed && props.content.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </section>
    );
}


export default MyProgressSection