export const getCharacter = (id: string) => {
  return fetch(`http://localhost:8080/character/${id}`).then((value) => value.json());
}