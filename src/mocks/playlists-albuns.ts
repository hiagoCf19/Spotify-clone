export interface cards {
  title: string;
  image: string;
  color?: string;
  description: string;
  musicas: musics[];
}
export interface Pl {
  name: string;
  exibitionHome: boolean;
  classe: string;
  cards: cards[];
}
export interface artista {
  name: string;
  foto: string;
  bannerID: string;
  color?: string;
  genre: string;
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
const BannerIDS = {
  adl: "https://i.scdn.co/image/ab6761860000101659a64b13ff207d3184e0079a",
  bazzi: "	https://i.scdn.co/image/ab676186000010163fd1984fedc4528377b8358c",
  d4vd: "	https://i.scdn.co/image/ab67618600001016f328ba2b3c84ec0e31243360",
  eduardoCosta:
    "	https://i.scdn.co/image/ab67618600001016234986d48714d9ccd2b18e9b",
  fleetwoodMac:
    "	https://i.scdn.co/image/ab67618600001016c6b15528173510ab4deb8f98",
  freddieDred:
    "	https://i.scdn.co/image/ab676186000010161817255b3972bcfc061f822d",
  lanaDelRey:
    "https://i.scdn.co/image/ab67618600001016adc556aaf75e626cb4a1a1be",
  mcBinLaden:
    "https://i.scdn.co/image/ab6761860000101684785398d9eff76caa21aae7",
  radiohead: "https://i.scdn.co/image/ab676186000010161802a4cbec82e078cc15cbb0",
  rashid: "https://i.scdn.co/image/ab676186000010167357d8cde3d66a65a6e695a2",
  stones: "https://i.scdn.co/image/ab67618600001016282f8e91da4dff9d5bee49a8",
  theWalters:
    "https://i.scdn.co/image/ab676186000010169773b5bbdc030cf349a4fde0",
  vocations: "https://i.scdn.co/image/ab676186000010169ce635209a083bb42401e465",
};
const artistaColors = {
  Rashid: "rgba(169, 168, 196, 0.314) 190%",
};

export const playlists: Pl[] = [
  {
    name: "Feito para você",
    exibitionHome: true,
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
                genre: "Rock",
                bannerID: BannerIDS.radiohead,
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
                genre: "Rap",
                color: artistaColors.Rashid,
                foto: "assets/artistas/Rashid/perfil.jpeg",
                bannerID: BannerIDS.rashid,
              },
            ],
            album: "Confundindo Sábios",
            capa: "https://i.scdn.co/image/ab67616d00001e02136f6e8e15c00b93d12c0cf8",
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
                genre: "Rap",
                bannerID: BannerIDS.adl,
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
                genre: "Rap",
                color: artistaColors.Rashid,
                foto: "assets/artistas/Rashid/perfil.jpeg",
                bannerID: BannerIDS.rashid,
              },
            ],
            album: "Gratidão",
            capa: "https://i.scdn.co/image/ab67616d00001e02807fe591c189e35125945479",
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
                genre: "Indie",
                bannerID: BannerIDS.theWalters,
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
                genre: "Indie",
                bannerID: BannerIDS.vocations,
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
                genre: "Rock",
                bannerID: BannerIDS.fleetwoodMac,
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
                genre: "Rock",
                bannerID: BannerIDS.stones,
                foto: "assets/artistas/Stones/perfil.jpeg",
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
                genre: "outros",
                bannerID: "",
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
                genre: "outros",
                bannerID: "",
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
                genre: "Indie",
                bannerID: BannerIDS.d4vd,
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
                genre: "Hip-Hop",
                bannerID: BannerIDS.freddieDred,
                foto: "assets/artistas/FreddieDredd/perfil.jpeg",
              },
            ],
            album: "Frank Miller (kill Again)",
            capa: "assets/artistas/FreddieDredd/FrankMiller.jpeg",
            addEm: "1 de fev. de 2024",
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
    exibitionHome: true,
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
                genre: "Indie",
                bannerID: BannerIDS.d4vd,
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
                genre: "Indie",
                bannerID: BannerIDS.d4vd,
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
                genre: "Pop",
                bannerID: BannerIDS.lanaDelRey,
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
                genre: "Pop",
                bannerID: BannerIDS.lanaDelRey,
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
            name: "Young And Beautiful",
            artista: [
              {
                name: "Lana Del Rey",
                genre: "Pop",
                bannerID: BannerIDS.lanaDelRey,
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
                genre: "Pop",
                bannerID: BannerIDS.lanaDelRey,
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
      {
        title: "This Is Rashid",
        color: "rgba(131, 211, 204, 1.800) 120%",
        image: "assets/artistas/Rashid/thisIsRashid.jpg",
        description:
          "This is Rashid. Todos os maiores hits em uma só playlist.",
        musicas: [
          {
            name: "Mil Cairão",
            artista: [
              {
                name: "Rashid",
                genre: "Rap",
                color: artistaColors.Rashid,
                foto: "assets/artistas/Rashid/perfil.jpeg",
                bannerID: BannerIDS.rashid,
              },
            ],
            album: "Confundindo Sábios",
            capa: "https://i.scdn.co/image/ab67616d00001e02136f6e8e15c00b93d12c0cf8",
            addEm: "11 fev. 2024",
            durationMultipliedBy100: 403,
            liked: false,
            genre: "Rap",
          },
          {
            name: "Gratidão",
            artista: [
              {
                name: "Rashid",
                genre: "Rap",
                color: artistaColors.Rashid,
                foto: "assets/artistas/Rashid/perfil.jpeg",
                bannerID: BannerIDS.rashid,
              },
            ],
            album: "Gratidão",
            capa: "https://i.scdn.co/image/ab67616d00001e02807fe591c189e35125945479",
            addEm: "21 fev. 2024",
            durationMultipliedBy100: 334,
            liked: false,
            genre: "Rap",
          },
        ],
      },
      {
        title: "This Is The Rolling Stones",
        color: "rgb(111, 145, 193, 1.800) 120%",
        image: "assets/artistas/Stones/thisIsStones.jpg",
        description:
          "This is The Rolling Stones. Todos os maiores hits em uma só playlist.",
        musicas: [
          {
            name: "Paint It, Black 01",
            artista: [
              {
                name: "The Rolling Stones",
                genre: "Rock",
                bannerID: BannerIDS.stones,
                foto: "assets/artistas/Stones/perfil.jpeg",
              },
            ],

            capa: "assets/artistas/Stones/afterm.jpeg",
            album: "Aftermath",
            addEm: "9 de fev. de 2024",
            durationMultipliedBy100: 322,
            liked: false,
            genre: "Rock",
          },
          {
            name: "Gimme Shelter",
            artista: [
              {
                name: "The Rolling Stones",
                genre: "Rock",
                bannerID: BannerIDS.stones,
                foto: "assets/artistas/Stones/perfil.jpeg",
              },
            ],
            album: "Let It Bleed",
            capa: "assets/artistas/Stones/letItBleed.jpeg",
            addEm: "5 de dez. de 1969",
            durationMultipliedBy100: 334,
            liked: false,
            genre: "Rock",
          },
        ],
      },
      {
        title: "This Is The Bazzi",
        color: "rgba(188, 179, 186, 1.9) 120%",
        image: "assets/artistas/Bazzi/thisIsBazzi.jpg",
        description:
          "This is The Bazzi. Todos os maiores hits em uma só playlist.",
        musicas: [
          {
            name: "Dreams",
            artista: [
              {
                name: "Bazzi",
                genre: "Pop",
                bannerID: BannerIDS.bazzi,
                foto: "assets/artistas/Bazzi/perfil.jpeg",
              },
            ],

            capa: "assets/artistas/Bazzi/cosmic.jpeg",
            album: "COSMIC",
            addEm: "12 de abr. de 2018",
            durationMultipliedBy100: 227,
            liked: false,
            genre: "Pop",
          },
          {
            name: "Star",
            artista: [
              {
                name: "Bazzi",
                genre: "Pop",
                bannerID: BannerIDS.bazzi,
                foto: "assets/artistas/Bazzi/perfil.jpeg",
              },
            ],

            capa: "assets/artistas/Bazzi/cosmic.jpeg",
            album: "COSMIC",
            addEm: "12 de abr. de 2018",
            durationMultipliedBy100: 249,
            liked: false,
            genre: "Pop",
          },
          {
            name: "I.F.L.Y",
            artista: [
              {
                name: "Bazzi",
                genre: "Pop",
                bannerID: BannerIDS.bazzi,
                foto: "assets/artistas/Bazzi/perfil.jpeg",
              },
            ],

            capa: "assets/artistas/Bazzi/soulSearching.jpeg",
            album: "Soul Searching",
            addEm: "9 de ago. de 2019",
            durationMultipliedBy100: 245,
            liked: false,
            genre: "Pop",
          },
        ],
      },
      {
        title: "This Is The Eduardo Costa",
        color: "rgb(75, 35, 123, 1) 95%",
        image: "assets/artistas/EduardoCosta/thisIsEdCosta.jpg",
        description:
          "This is The Bazzi. Todos os maiores hits em uma só playlist.",
        musicas: [
          {
            name: "Amor de Violeiro",
            artista: [
              {
                name: "Eduardo Costa",
                genre: "Sertanejo",
                bannerID: BannerIDS.eduardoCosta,
                foto: "assets/artistas/EduardoCosta/perfil.jpeg",
              },
            ],

            capa: "assets/artistas/EduardoCosta/acustico2004.jpeg",
            album: "EduardoCosta - Acustico",
            addEm: "1 de jan. de 2004",
            durationMultipliedBy100: 415,
            liked: false,
            genre: "Sertanejo",
          },
          {
            name: "Sapequinha",
            artista: [
              {
                name: "Eduardo Costa",
                genre: "Sertanejo",
                bannerID: BannerIDS.eduardoCosta,
                foto: "assets/artistas/EduardoCosta/perfil.jpeg",
              },
            ],

            capa: "assets/artistas/EduardoCosta/vivendoEaprendendo.jpeg",
            album: "Vivendo e Aprendendo",
            addEm: "31 de jul. de 2015",
            durationMultipliedBy100: 311,
            liked: false,
            genre: "Sertanejo",
          },
          {
            name: "Sou Seu Fã N° 1",
            artista: [
              {
                name: "Eduardo Costa",
                genre: "Sertanejo",
                bannerID: BannerIDS.eduardoCosta,
                foto: "assets/artistas/EduardoCosta/perfil.jpeg",
              },
            ],

            capa: "assets/artistas/EduardoCosta/temTudoAVer.jpeg",
            album: "Tem tudo a ver",
            addEm: "1 de jan. de 2009",
            durationMultipliedBy100: 350,
            liked: false,
            genre: "Sertanejo",
          },
        ],
      },
    ],
  },
  {
    name: "Musicas Brasileiras ",
    exibitionHome: true,
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
                genre: "outros",
                bannerID: "",
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
                genre: "outros",
                bannerID: "",
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
    name: "a",
    exibitionHome: true,
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
                genre: "outros",
                bannerID: "",
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
                genre: "outros",
                bannerID: "",
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
