import React from 'react';
import { FC } from 'react';
import styles from './title.module.scss';

interface PageTitleProps {
    title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
    return (
        <h3 className={styles.pageTitle}>{title}</h3>
    );
};

export default PageTitle;