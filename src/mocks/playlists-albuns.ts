interface Pl {
  name: string;
  image?: string;
  classe: string;
  musicsQnt?: string;
  artista?: string;
}
export const playlists: Pl[] = [
  {
    name: "Músicas curtidas",
    image: "./assets/Art.png",
    classe: "Playlist",
    musicsQnt: "122 Músicas",
  },
  {
    name: "Playlist #1",
    classe: "Playlist",
    musicsQnt: "62 Músicas",
  },
  {
    name: "Playlist #2",
    classe: "Playlist",
    musicsQnt: "23 Músicas",
  },
];
