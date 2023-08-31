export const searchCharacters = (name: string) => {
  return fetch(`http://localhost:8080/character/search/${name}`).then((value) => value.json());
}