import React from 'react';
import { FC } from 'react';
import styles from './title.module.scss';

interface TextH4Props {
    title: string;
}

const TextH4: FC<TextH4Props> = ({ title }) => {
    return (
        <h4 className={styles.textH4}>{title}</h4>
    );
};

export default TextH4;