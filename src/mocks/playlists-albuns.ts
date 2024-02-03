export interface Pl {
  name: string;
  image?: string;
  classe: string;
  musicsQnt?: string;
  artistaDoAlbum?: string;
  musics?: musics[];
}
export interface musics {
  name: string;
  artista: string;
  liked: boolean;
  capa?: string;
}

export const playlists: Pl[] = [
  {
    name: "album #1",
    classe: "Album",
    artistaDoAlbum: "Artista",
    musicsQnt: "",
    musics: [
      {
        name: "The Chain -2004 Remaster",
        artista: "Fleetwood Mac",
        liked: true,
        capa: "assets/capas/theChain.jpeg",
      },
      {
        name: "musica 01",
        artista: "artista 01",
        liked: false,
      },
      {
        name: "musica 01",
        artista: "artista 01",
        liked: false,
      },
    ],
  },
  {
    name: "Playlist #2",
    classe: "Playlist",
    musicsQnt: "23 Músicas",
    musics: [
      {
        name: "musica 02",
        artista: "artista 02",
        liked: true,
      },
    ],
  },
  {
    name: "Playlist #3",
    classe: "Playlist",
    musicsQnt: "62 Músicas",
    musics: [
      {
        name: "musica 03",
        artista: "artista 03",
        liked: true,
      },
    ],
  },
  {
    name: "Playlist #4",
    classe: "Playlist",
    musicsQnt: "23 Músicas",
    musics: [
      {
        name: "musica 04",
        artista: "artista 04",
        liked: false,
      },
    ],
  },
  {
    name: "Playlist #5",
    classe: "Playlist",
    musicsQnt: "",
    musics: [
      {
        name: "musica 05",
        artista: "artista 05",
        liked: true,
      },
    ],
  },
  {
    name: "Playlist #6",
    classe: "Playlist",
    musicsQnt: "24 Músicas",
    musics: [
      {
        name: "musica 06",
        artista: "artista 06",
        liked: true,
      },
    ],
  },
  {
    name: "Playlist #7",
    classe: "Playlist",
    musicsQnt: "92 Músicas",
    musics: [
      {
        name: "musica 07",
        artista: "artista 07",
        liked: false,
      },
    ],
  },
  {
    name: "Playlist #6",
    classe: "Playlist",
    musicsQnt: "11 Músicas",
    musics: [
      {
        name: "musica 08",
        artista: "artista 08",
        liked: false,
      },
    ],
  },
  {
    name: "Playlist #9",
    classe: "Playlist",
    musicsQnt: "29 Músicas",
    musics: [
      {
        name: "musica 09",
        artista: "artista 09",
        liked: true,
      },
    ],
  },
  {
    name: "Playlist #9",
    classe: "Playlist",
    musicsQnt: "29 Músicas",
    musics: [
      {
        name: "musica 09",
        artista: "artista 09",
        liked: true,
      },
    ],
  },
  {
    name: "Playlist #9",
    classe: "Playlist",
    musicsQnt: "29 Músicas",
    musics: [
      {
        name: "musica 09",
        artista: "artista 09",
        liked: true,
      },
    ],
  },
  {
    name: "Playlist #9",
    classe: "Playlist",
    musicsQnt: "29 Músicas",
    musics: [
      {
        name: "musica 09",
        artista: "artista 09",
        liked: true,
      },
    ],
  },
];
