'use client'

import { useEffect, useState } from 'react';
import { searchCharacters } from '@/utils/searchCharacters';

import { Input } from '../input/input';
import { SearcherResult } from './helpers/searcher-result';

import styles from './styles.module.css';

export const Searcher = () => {
  const [searchValue, setSearchValue] = useState("");
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    searchCharacters(searchValue).then((val) => {
      setCharList(val);
    })
  }, [searchValue]);

  return (
    <div className={styles.searcher}>
      <div className={styles.searcherInputBox}>
        <Input value={searchValue} setValue={setSearchValue} />
      </div>
      <div className={styles.searcherResultsBox}>
        {charList.length > 0 && charList.map((name, index) => (
          <SearcherResult key={index} name={name} />
        ))}
      </div>
    </div>
  );
}