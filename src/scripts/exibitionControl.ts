import { playlists } from "@/mocks/playlists-albuns";

export const exibidos = playlists.filter((item) => {
  return item.exibitionHome === true;
});
export const naoExibidos = playlists.filter((item) => {
  return item.exibitionHome === false;
});
