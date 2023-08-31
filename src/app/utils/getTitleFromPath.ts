export const getTitleFromPath = (path: string | null) => {
  if(path === '/') {
    return "Home";
  } else if(path && path.match(/inspector\/\d*/)) {
    return "Character Inspector"
  } else if(path && path.match(/client\/\d*/)) {
    return "Game Client"
  }

  return "Mystery Zone"
}