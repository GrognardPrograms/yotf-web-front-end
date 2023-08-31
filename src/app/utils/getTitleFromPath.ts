export const getTitleFromPath = (path: string | null) => {
  if(path === '/') {
    return "Home";
  } else if(path && path.match(/inspector\/\d*/)) {
    return "Character Inspector"
  }

  return "Mystery Zone"
}