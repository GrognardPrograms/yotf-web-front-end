import { CharacterCard } from "@/components/character-card/character-card";
import { Searcher } from "@/components/searcher/searcher";

import styles from './styles.module.css'

export const InspectorPage = (props: any) => {
  const {id} = props.params;

  return (
    <div className={styles.inspectorPage}>
      <div className={styles.searcherBox}>
        <Searcher />
      </div>
      <div className={styles.characterCardBox}>
        <CharacterCard id={id}/>
      </div>
    </div>
  )
}

export default InspectorPage;