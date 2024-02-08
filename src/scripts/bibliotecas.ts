import { playlists } from "@/mocks/playlists-albuns";

export const LibraryCards = playlists.filter((item) => {
  return item.biblioteca === true;
});
