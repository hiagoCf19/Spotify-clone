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
  addEm: string;
}

export const playlists: Pl[] = [
  {
    name: "Musicas Curtidas",
    classe: "Playlist",
    image: "./assets/Art.png",
    musics: [
      {
        name: "The Chain -2004 Remaster",
        artista: "Fleetwood Mac",
        liked: true,
        capa: "assets/capas/theChain.jpeg",
        addEm: "4 de set. de 2023",
      },
      {
        name: "Dreams",
        artista: "Bazzi",
        liked: true,
        addEm: "05/02/2024",
        capa: "assets/capas/cosmic.jpeg",
      },
      {
        name: "musica 03",
        artista: "artista 03",
        liked: false,
        addEm: "25/01/2024",
      },
      {
        name: "musica 04",
        artista: "artista 04",
        liked: false,
        addEm: "10/01/2024",
      },
      {
        name: "musica 05",
        artista: "artista 05",
        liked: false,
        addEm: "05/02/2024",
      },
      {
        name: "musica 06",
        artista: "artista 06",
        liked: false,
        addEm: "01/02/2024",
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
        addEm: "05/02/2024",
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
        addEm: "05/02/2024",
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
        addEm: "05/02/2024",
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
        addEm: "01/02/2024",
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
        addEm: "28/01/2024",
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
        addEm: "15/01/2024",
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
        addEm: "10/01/2024",
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
        addEm: "10/01/2024",
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
        addEm: "10/01/2024",
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
        addEm: "10/01/2024",
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
        addEm: "10/01/2024",
      },
    ],
  },
];
