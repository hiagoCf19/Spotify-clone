export interface cards {
  title: string;
  image: string;
  color?: string;
  description: string;
  musicas: musics[];
}
export interface Pl {
  name: string;
  biblioteca: boolean;
  classe: string;
  cards: cards[];
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
    biblioteca: false,
    classe: "Álbum",
    cards: [
      {
        title: "Moody Mix",
        color: "rgba(223,84,139, 0.600) 120%",
        image: "assets/capas/moody.jpeg",
        description: "Nirvana, Tom Odell, Radiohead e mais",
        musicas: [
          {
            name: "No Surprises",
            artista: [
              {
                name: "Radiohead",
                foto: "assets/artistas/Radiohead/perfil.jpeg",
              },
            ],
            album: "OK Computer",
            capa: "assets/artistas/Radiohead/OkComp.jpeg",
            addEm: "20 fev. 2024",
            durationMultipliedBy100: 349,
            liked: false,
            genre: "Rock",
          },
        ],
      },
      {
        title: "Daily Mix 1",
        color: "rgba(152,206,197, 0.800) 120%",
        image: "assets/capas/mix1.jpeg",
        description: "Rashid, ADL, Sant e mais",
        musicas: [
          {
            name: "Mil Cairão",
            artista: [
              {
                name: "Rashid",
                foto: "assets/artistas/Rashid/perfil.jpeg",
              },
            ],
            album: "Confundindo Sábios",
            capa: "assets/artistas/Rashid/CnfSabios.jpeg",
            addEm: "11 fev. 2024",
            durationMultipliedBy100: 403,
            liked: false,
            genre: "Rap",
          },
          {
            name: "Da Favela pro Mundo",
            artista: [
              {
                name: "ADL",
                foto: "assets/artistas/ADL/perfil.jpeg",
              },
            ],
            album: "Da Favela pro Mundo",
            capa: "assets/artistas/ADL/FavMundo.jpeg",
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
                foto: "assets/artistas/Rashid/perfil.jpeg",
              },
            ],
            album: "Gratidão",
            capa: "assets/artistas/Rashid/gratidao.jpeg",
            addEm: "21 fev. 2024",
            durationMultipliedBy100: 334,
            liked: false,
            genre: "Rap",
          },
        ],
      },
      {
        title: "Daily Mix 4",
        color: "rgba(211,131,154, 0.800) 120%",
        image: "assets/capas/mix4.jpeg",
        description: "The Walters, Vacations, Vundabar e mais",
        musicas: [
          {
            name: "I Love You So",
            artista: [
              {
                name: "The Walters",
                foto: "assets/artistas/TheWalters/perfil.jpeg",
              },
            ],
            capa: "assets/artistas/TheWalters/ILso.jpeg",
            album: "I Love You So",
            addEm: "15 fev. 2024",
            durationMultipliedBy100: 240,
            liked: false,
            genre: "Indie",
          },
          {
            name: "Telephones",
            artista: [
              {
                name: "Vocations",
                foto: "assets/artistas/Vocations/perfil.jpeg",
              },
            ],
            capa: "assets/artistas/Vocations/changes.jpeg",
            album: "Changes",
            addEm: "13 fev. 2024",
            durationMultipliedBy100: 332,
            liked: false,
            genre: "Indie",
          },
        ],
      },

      {
        title: "Daily Mix 5",
        color: "rgb(240,192,105, 0.500) 120%",
        image: "assets/capas/mix5.jpeg",
        description: "Fleetwood Mac, The Rolling Stones, America e mais",
        musicas: [
          {
            name: "The Chain -2004 Remaster",
            artista: [
              {
                name: "Fleetwood Mac",
                foto: "assets/artistas/FleetwoodMac/perfil.jpeg",
              },
            ],

            album: "Rumours (Super Deluxe)",
            capa: "assets/artistas/FleetwoodMac/theChain.jpeg",
            addEm: "4 de set. de 2023",
            durationMultipliedBy100: 430,
            liked: false,
            genre: "Rock",
          },
          {
            name: "Paint It, Black 01",
            artista: [
              {
                name: "The Rolling Stones",
                foto: "assets/artistas/Stones/perfil.jpg",
              },
            ],

            capa: "assets/artistas/Stones/afterm.jpeg",
            album: "Aftermath",
            addEm: "9 de fev. de 2024",
            durationMultipliedBy100: 322,
            liked: false,
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
        image: "assets/capas/radar.jpeg",
        description:
          "Confira os lançamentos dos artistas que você segue e novos singles escolhidos só pra você.",
        musicas: [
          {
            name: "Leave Her",
            artista: [
              {
                name: "d4vd",
                foto: "assets/artistas/d4vd/perfil.jpeg",
              },
            ],
            album: "Withering",
            capa: "assets/artistas/d4vd/withering.jpeg",
            addEm: "25 de fev. de 2024",
            durationMultipliedBy100: 244,
            liked: false,
            genre: "Indie",
          },
          {
            name: "Frank Miller (kill Again)",
            artista: [
              {
                name: "Freddie Dredd",
                foto: "assets/artistas/FreddieDredd/perfil.jpeg",
              },
            ],
            album: "Frank Miller (kill Again)",
            capa: "assets/artistas/FreddieDredd/FrankMiller.jpeg",
            addEm: "há 3 dias",
            durationMultipliedBy100: 211,
            liked: false,
            genre: "Hip-Hop",
          },
        ],
      },
    ],
  },
  {
    name: "O melhor de cada Artista",
    biblioteca: false,

    classe: "Playlist",
    cards: [
      {
        title: "This Is d4vd",
        color: "rgba(56, 82, 109, 1.800) 120%",
        image: "assets/artistas/d4vd/thisIsD4vd.jpeg",
        description: "This is d4vd. Todos os maiores hits em uma só playlist.",
        musicas: [
          {
            name: "Leave Her",
            artista: [
              {
                name: "d4vd",
                foto: "assets/artistas/d4vd/perfil.jpeg",
              },
            ],
            album: "Withering",
            capa: "assets/artistas/d4vd/withering.jpeg",
            addEm: "25 de fev. de 2024",
            durationMultipliedBy100: 244,
            liked: false,
            genre: "Indie",
          },
          {
            name: "Here With Me",
            capa: "assets/artistas/d4vd/petals.jpeg",
            artista: [
              {
                name: "d4vd",
                foto: "assets/artistas/d4vd/perfil.jpeg",
              },
            ],
            album: "Petals to Thorns",
            addEm: "25 de fev. de 2024",
            durationMultipliedBy100: 420,
            liked: false,
            genre: "Indie",
          },
        ],
      },
      {
        title: "This Is Lana Del Rey",
        color: "rgba(216, 210, 214,1.800) 120%",
        image: "assets/artistas/Lana/thisIsLana.jpg",
        description:
          "This is Lana Del Rey. Todos os maiores hits em uma só playlist.",
        musicas: [
          {
            name: "Summertime Sadness",
            artista: [
              {
                name: "Lana Del Rey",
                foto: "assets/artistas/Lana/perfil.jpeg",
              },
            ],
            album: "Born To Die",
            capa: "assets/artistas/Lana/bornToDie.jpeg",
            addEm: "1 de jan. de 2012",
            durationMultipliedBy100: 425,
            liked: false,
            genre: "Pop",
          },
          {
            name: "Young And Beautiful",
            artista: [
              {
                name: "Lana Del Rey",
                foto: "assets/artistas/Lana/perfil.jpeg",
              },
            ],
            album: "Young And Beautiful",
            capa: "assets/artistas/Lana/youngBeautiful.jpeg",
            addEm: "1 de jan. de 2013",
            durationMultipliedBy100: 356,
            liked: false,
            genre: "Pop",
          },
          {
            name: "Radio",
            artista: [
              {
                name: "Lana Del Rey",
                foto: "assets/artistas/Lana/perfil.jpeg",
              },
            ],
            album: "Born To Die",
            capa: "assets/artistas/Lana/bornToDie.jpeg",
            addEm: "1 de jan. de 2012",
            durationMultipliedBy100: 334,
            liked: false,
            genre: "Pop",
          },
        ],
      },
    ],
  },
  {
    name: "Recomendados ",
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
