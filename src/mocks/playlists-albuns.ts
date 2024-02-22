export interface cards {
  title: string;
  image: string;
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
export interface artista {
  name: string;
  foto: string;
}
export interface musics {
  name: string;
  artista: artista[];
  album: string;
  capa?: string;
  addEm: string;
  liked: boolean;
  durationMultipliedBy100: number;
  genre: string;
}

export const playlists: Pl[] = [
  {
    name: "Feito para você",
    color: "",
    biblioteca: false,
    classe: "Álbum",
    image: "",
    cards: [
      {
        title: "Moody Mix",
        color: "rgba(223,84,139, 0.600) 120%",
        image: "assets/capas/Moody/moody.jpeg",
        description: "Nirvana, Tom Odell, Radiohead e mais",
        musicas: [
          {
            name: "No Surprises",
            artista: [
              {
                name: "Radiohead",
                foto: "assets/artistas/radiohead.jpeg",
              },
            ],
            album: "OK Computer",
            capa: "assets/capas/Moody/OkComp.jpeg",
            addEm: "20 fev. 2024",
            durationMultipliedBy100: 349,
            liked: true,
            genre: "Rock",
          },
        ],
      },
      {
        title: "Daily Mix 1",
        color: "rgba(152,206,197, 0.800) 120%",
        image: "assets/capas/mix1/mix1.jpeg",
        description: "Rashid, ADL, Sant e mais",
        musicas: [
          {
            name: "Mil Cairão",
            artista: [
              {
                name: "Rashid",
                foto: "assets/artistas/rashid.jpeg",
              },
            ],
            album: "Confundindo Sábios",
            capa: "assets/capas/mix1/CnfSabios.jpeg",
            addEm: "11 fev. 2024",
            durationMultipliedBy100: 403,
            liked: true,
            genre: "Rap",
          },
          {
            name: "Da Favela pro Mundo",
            artista: [
              {
                name: "ADL",
                foto: "assets/artistas/ADL.jpeg",
              },
            ],
            album: "Da Favela pro Mundo",
            capa: "assets/capas/mix1/FavMundo.jpeg",
            addEm: "13 fev. 2024",
            durationMultipliedBy100: 436,
            liked: false,
            genre: "Rap",
          },
          {
            name: "Gratidão",
            artista: [
              {
                name: "Rashid",
                foto: "assets/artistas/rashid.jpeg",
              },
            ],
            album: "Gratidão",
            capa: "assets/capas/rap/gratidao.jpeg",
            addEm: "21 fev. 2024",
            durationMultipliedBy100: 334,
            liked: true,
            genre: "Rap",
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
            artista: [
              {
                name: "The Walters",
                foto: "assets/artistas/theWalters.jpeg",
              },
            ],
            capa: "assets/capas/mix4/ILso.jpeg",
            album: "I Love You So",
            addEm: "15 fev. 2024",
            durationMultipliedBy100: 240,
            liked: true,
            genre: "Indie",
          },
          {
            name: "Telephones",
            artista: [
              {
                name: "Vocations",
                foto: "assets/artistas/vocations.jpeg",
              },
            ],
            capa: "assets/capas/mix4/changes.jpeg",
            album: "Changes",
            addEm: "13 fev. 2024",
            durationMultipliedBy100: 332,
            liked: true,
            genre: "Indie",
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
            artista: [
              {
                name: "Fleetwood Mac",
                foto: "assets/artistas/fleetwoodMac.jpeg",
              },
            ],

            album: "Rumours (Super Deluxe)",
            capa: "assets/capas/theChain.jpeg",
            addEm: "4 de set. de 2023",
            durationMultipliedBy100: 430,
            liked: true,
            genre: "Rock",
          },
          {
            name: "Paint It, Black 01",
            artista: [
              {
                name: "The Rolling Stones",
                foto: "assets/artistas/stones.jpg",
              },
            ],

            capa: "assets/capas/mix5/afterm.jpeg",
            album: "Aftermath",
            addEm: "9 de fev. de 2024",
            durationMultipliedBy100: 322,
            liked: true,
            genre: "Rock",
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
            artista: [
              {
                name: "artista X",
                foto: "assets",
              },
            ],
            album: "album03",
            addEm: "05/02/2024",
            durationMultipliedBy100: 100,
            liked: false,
            genre: "Outros",
          },
          {
            name: "musica 01",
            artista: [
              {
                name: "artista X",
                foto: "assets",
              },
            ],
            album: "album03",
            addEm: "05/02/2024",
            durationMultipliedBy100: 100,
            liked: false,
            genre: "Outros",
          },
        ],
      },
      {
        title: "Radar de Novidades",
        color: "rgba(169, 168, 196, 0.500) 120%",
        image: "assets/capas/RadarDeNovidades/radar.jpeg",
        description:
          "Confira os lançamentos dos artistas que você segue e novos singles escolhidos só pra você.",
        musicas: [
          {
            name: "Leave Her",
            artista: [
              {
                name: "d4vd",
                foto: "assets",
              },
            ],
            album: "Withering",
            capa: "assets/capas/RadarDeNovidades/withering.jpeg",
            addEm: "há 2 dias",
            durationMultipliedBy100: 244,
            liked: true,
            genre: "Indie",
          },
          {
            name: "Frank Miller (kill Again)",
            artista: [
              {
                name: "Freddie Dredd",
                foto: "assets/artistas/freddieDredd.jpeg",
              },
            ],
            album: "Frank Miller (kill Again)",
            capa: "assets/capas/RadarDeNovidades/FrankMiller.jpeg",
            addEm: "há 3 dias",
            durationMultipliedBy100: 211,
            liked: true,
            genre: "Hip-Hop",
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
            artista: [
              {
                name: "artista X",
                foto: "assets",
              },
            ],
            album: "album03",
            addEm: "05/02/2024",
            durationMultipliedBy100: 100,
            liked: false,
            genre: "Outros",
          },
          {
            name: "musica test2",
            artista: [
              {
                name: "artista X",
                foto: "assets",
              },
            ],
            album: "album03",
            addEm: "05/02/2024",
            durationMultipliedBy100: 100,
            liked: false,
            genre: "Outros",
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
            artista: [
              {
                name: "artista X",
                foto: "assets",
              },
            ],

            album: "album03",
            addEm: "05/02/2024",
            durationMultipliedBy100: 100,
            liked: false,
            genre: "Outros",
          },
          {
            name: "musica test2",
            artista: [
              {
                name: "artista X",
                foto: "assets",
              },
            ],

            album: "album03",
            addEm: "05/02/2024",
            durationMultipliedBy100: 100,
            liked: false,
            genre: "Outros",
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
        title: "Playlist #1",
        image: "",
        description: "playlist #2",
        musicas: [
          {
            name: "musica teste1",
            artista: [
              {
                name: "artista X",
                foto: "assets",
              },
            ],

            album: "album03",
            addEm: "05/02/2024",
            durationMultipliedBy100: 100,
            liked: false,
            genre: "Outros",
          },
          {
            name: "musica test2",
            artista: [
              {
                name: "artista X",
                foto: "assets",
              },
            ],

            album: "album03",
            addEm: "05/02/2024",
            durationMultipliedBy100: 100,
            liked: false,
            genre: "Outros",
          },
        ],
      },
    ],
  },
];
