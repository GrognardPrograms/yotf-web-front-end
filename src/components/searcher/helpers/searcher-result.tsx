'use client'

import Link from 'next/link';

import styles from '../styles.module.css';

export interface SearcherResultProps {
  name: string
}

export const SearcherResult = (props: SearcherResultProps) => {
  const {name} = props;
  return (
    <Link className={styles.searcherResultLink} href={`/inspector/${26}`}>
      <div className={styles.searcherResult}>
        <div>
          {name}
        </div>
      </div>
    </Link>
  );
}