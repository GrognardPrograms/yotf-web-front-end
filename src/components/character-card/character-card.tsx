
import { getCharacter } from '@/utils/getCharacter';

import styles from './styles.module.css'

export interface CharacterCardProps {
  id: string
}

export const CharacterCard = async (props: CharacterCardProps) => {
  const { id } = props;
  
  const charData = await getCharacter(id);

  return (
    <div className={styles.characterCard}>
      {charData}
    </div>
  )
}