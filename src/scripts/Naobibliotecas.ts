import { playlists } from "@/mocks/playlists-albuns";

export const DontLibraryCards = playlists.filter((item) => {
  return item.biblioteca === false;
});
