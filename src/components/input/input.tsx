'use client'

import styles from './styles.module.css';

export interface InputProps {
  value: string;
  setValue: (v: string) => void
}

export const Input = (props: InputProps) => {
  const {value, setValue} = props;
  return (
    <input className={styles.input} value={value} onChange={(e) => setValue(e.target.value)} />
  );
}