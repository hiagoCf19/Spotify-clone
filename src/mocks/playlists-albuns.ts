export interface cards {
  title: string;
  image?: string;
  color?: string;
  description: string;
  musicas: musics[];
}
export interface Pl {
  name: string;
  color: string;
  biblioteca: boolean;
  image?: string;
  classe: string;
  cards: cards[];

  description?: string;
}
export interface musics {
  name: string;
  artista: string;
  album: string;
  capa?: string;
  addEm: string;
}

export const playlists: Pl[] = [
  {
    name: "Musicas Curtidas",
    color: " rgba(66, 46, 194, 0.535) 100%",
    biblioteca: true,
    classe: "Playlist",
    image: "./assets/Art.png",
    cards: [
      {
        title: "Musicas Curtidas",
        image: "./assets/Art.png",
        color: " rgba(66, 46, 194, 0.535) 100%",
        description: "As músicas que você curtiu.",
        musicas: [
          {
            name: "The Chain -2004 Remaster",
            artista: "Fleetwood Mac",

            album: "Rumours (Super Deluxe)",
            capa: "assets/capas/theChain.jpeg",
            addEm: "4 de set. de 2023",
          },
          {
            name: "Dreams",
            artista: "Bazzi",

            album: "Cosmic",
            capa: "assets/capas/cosmic.jpeg",
            addEm: "05/02/2024",
          },
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test3",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test3",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "playlist #2",
    color: "",
    biblioteca: true,
    classe: "Playlist",
    cards: [
      {
        title: "Playlist #2",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",

            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "Feito para você",
    color: "",
    biblioteca: false,
    classe: "Álbum",
    image: "",
    cards: [
      {
        title: "Daily Mix 1",
        color: "rgba(152,206,197, 0.800) 120%",
        image: "assets/capas/mix1/mix1.jpeg",
        description: "Rashid, ADL, Sant e mais",
        musicas: [
          {
            name: "Mil Cairão",
            artista: "Rashid",
            album: "Confundindo Sábios",
            capa: "assets/capas/mix1/CnfSabios.jpeg",
            addEm: "11 fev. 2024",
          },
          {
            name: "Da Favela pro Mundo",
            artista: "ADL",
            album: "Da Favela pro Mundo",
            capa: "assets/capas/mix1/FavMundo.jpeg",
            addEm: "13 fev. 2024",
          },
        ],
      },
      {
        title: "Daily Mix 4",
        color: "rgba(211,131,154, 0.800) 120%",
        image: "assets/capas/mix4/mix4.jpeg",
        description: "The Walters, Vacations, Vundabar e mais",
        musicas: [
          {
            name: "I Love You So",
            artista: "The Walters",
            capa: "assets/capas/mix4/ILso.jpeg",
            album: "I Love You So",
            addEm: "15 fev. 2024",
          },
          {
            name: "Telephones",
            artista: "Vocations",
            capa: "assets/capas/mix4/changes.jpeg",
            album: "Changes",
            addEm: "13 fev. 2024",
          },
        ],
      },
      {
        title: "Daily Mix 5",
        color: "rgb(240,192,105, 0.500) 120%",
        image: "assets/capas/mix5/mix5.jpeg",
        description: "Fleetwood Mac, The Rolling Stones, America e mais",
        musicas: [
          {
            name: "The Chain -2004 Remaster",
            artista: "Fleetwood Mac",
            album: "Rumours (Super Deluxe)",
            capa: "assets/capas/theChain.jpeg",
            addEm: "4 de set. de 2023",
          },
          {
            name: "Paint It, Black 01",
            artista: "The Rolling Stones",
            capa: "assets/capas/mix5/afterm.jpeg",
            album: "Aftermath",
            addEm: "9 de fev. de 2024",
          },
        ],
      },
      {
        title: "Daily Mix 6",
        color: "rgba(169, 168, 196, 0.500) 120%",
        image: "assets/capas/mix6.jpeg",
        description: "kamaitachi, LEXY, Vitello e mais",
        musicas: [
          {
            name: "musica 00",
            artista: "artista 02",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica 01",
            artista: "artista 02",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "Playlist #3",
    color: "",
    biblioteca: true,
    classe: "Playlist",

    cards: [
      {
        title: "Playlist #3",
        image: "",
        description: "playlist #3",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",

            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",

            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "Playlist #4",
    color: "",
    biblioteca: true,
    classe: "Playlist",

    cards: [
      {
        title: "Playlist #5",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 05",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "Playlist #6",
    color: "",
    biblioteca: true,
    classe: "Playlist",

    cards: [
      {
        title: "Playlist #6",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "Playlist #7",
    color: "",
    biblioteca: true,
    classe: "Playlist",
    cards: [
      {
        title: "Playlist #7",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "Playlist #8",
    color: "",
    biblioteca: true,
    classe: "Playlist",
    cards: [
      {
        title: "Playlist #8",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "Playlist #9",
    color: "",
    biblioteca: true,
    classe: "Playlist",

    cards: [
      {
        title: "Playlist #9",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "abc title card",
    color: "",
    biblioteca: false,
    description: "descrição do card",
    classe: "Playlist",
    cards: [
      {
        title: "abc album",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",

            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",

            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "Playlist #9",
    color: "",
    biblioteca: true,
    classe: "Playlist",
    cards: [
      {
        title: "Playlist #11",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",

            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",

            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "Recomendados ",
    description: "seus recomendados",
    color: "",
    biblioteca: false,
    classe: "Playlist",
    cards: [
      {
        title: "recomendacoes #2",
        image: "",
        description: "recomendados 2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
  {
    name: "ex",
    description: "exx",
    color: "",
    biblioteca: false,
    classe: "Playlist",
    cards: [
      {
        title: "Playlist #2",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: "artista 02",

            album: "album03",
            addEm: "05/02/2024",
          },
          {
            name: "musica test2",
            artista: "artista 03",

            album: "album03",
            addEm: "05/02/2024",
          },
        ],
      },
    ],
  },
];
