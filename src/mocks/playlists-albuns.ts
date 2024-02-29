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
  thisIs?: string;
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
const artista = {
  adl: {
    foto: "assets/artistas/ADL/perfil.jpeg",
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO47M0aB-default.jpg",
    bannerID:
      "https://i.scdn.co/image/ab6761860000101659a64b13ff207d3184e0079a",
    color: "rgba(76, 75, 73, 0.800) 140%",
  },
  bazzi: {
    foto: "https://i.scdn.co/image/ab676161000051742491594c8f731523e085d84a",
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2Kkc5y-default.jpg",
    bannerID:
      "https://i.scdn.co/image/ab676186000010163fd1984fedc4528377b8358c",
    color: "rgba(169, 168, 196, 0.314) 190%",
  },
  chicoBuarque: {
    foto: "https://i.scdn.co/image/ab676161000051741f33f0eccfef05940a1ef879",
    bannerID:
      "https://i.scdn.co/image/ab676186000010168c42d9dc79e31ea217ff4470",
    thisIs: "assets/artistas/ChicoBuarque/thisIs.jpg",
    color: "rgb(62, 47, 44)",
  },
  d4vd: {
    foto: "	https://i.scdn.co/image/ab67616100005174ad447187a35f422307e88ad3",
    bannerID:
      "	https://i.scdn.co/image/ab67618600001016f328ba2b3c84ec0e31243360",
    thisIs:
      "	https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3gAXLR-default.jpg",
    color: "rgba(169, 168, 196, 0.314) 190%",
  },
  eduardoCosta: {
    foto: "",
    bannerID:
      "	https://i.scdn.co/image/ab67618600001016234986d48714d9ccd2b18e9b",
    thisIs: "",
    color: "rgba(80, 21, 69, 1.814) 120%",
  },

  fleetwoodMac: {
    foto: "",
    bannerID:
      "	https://i.scdn.co/image/ab67618600001016c6b15528173510ab4deb8f98",
    thisIs: "",
    color: "rgba(169, 168, 196, 0.314) 190%",
  },

  freddieDred: {
    foto: "",
    bannerID:
      "	https://i.scdn.co/image/ab676186000010161817255b3972bcfc061f822d",
    thisIs: "",
    color: "rgba(52, 17, 14, 1) 120%",
  },
  lanaDelRey: {
    foto: "",
    bannerID:
      "https://i.scdn.co/image/ab67618600001016adc556aaf75e626cb4a1a1be",
    thisIs: "",
    color: "rgba(20, 23, 30, 1) 60%",
  },
  mcBinLaden: {
    foto: "https://i.scdn.co/image/ab676161000051741472571ab38e76b5307585d8",
    bannerID:
      "https://i.scdn.co/image/ab6761860000101684785398d9eff76caa21aae7",
    thisIs: "",
    color: "rgba(2, 53, 54, 1) 160%",
  },
  radiohead: {
    foto: "assets/artistas/Radiohead/perfil.jpeg",
    bannerID:
      "https://i.scdn.co/image/ab676186000010161802a4cbec82e078cc15cbb0",
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2VxlyE-default.jpg",
    color: "rgba(25, 52, 69, 2) 100%",
  },
  rashid: {
    foto: "https://i.scdn.co/image/ab67616100005174b783f0d38cfd32275fe49ad7",
    bannerID:
      "https://i.scdn.co/image/ab676186000010167357d8cde3d66a65a6e695a2",
    thisIs: "",
    color: "rgba(169, 168, 196, 0.314) 190%",
  },
  stones: {
    foto: "assets/artistas/Stones/perfil.jpeg",
    bannerID:
      "https://i.scdn.co/image/ab67618600001016282f8e91da4dff9d5bee49a8",
    thisIs: "",
    color: "rgba(169, 168, 196, 0.314) 190%",
  },
  theWalters: {
    foto: "assets/artistas/TheWalters/perfil.jpeg",
    bannerID:
      "https://i.scdn.co/image/ab676186000010169773b5bbdc030cf349a4fde0",
    thisIs: "",
    color: "rgb(70, 42, 39, 0.800) 120%",
  },
  vocations: {
    foto: "assets/artistas/Vocations/perfil.jpeg",
    bannerID:
      "https://i.scdn.co/image/ab676186000010169ce635209a083bb42401e465",
    thisIs: "",
    color: "rgb(39, 13, 8)",
  },
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
            name: "No Surprises ",
            artista: [
              {
                name: "Radiohead ",
                genre: "Rock",
                bannerID: artista.radiohead.bannerID,
                color: artista.radiohead.color,
                foto: artista.radiohead.foto,
                thisIs: artista.radiohead.thisIs,
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
                color: artista.rashid.color,
                foto: artista.rashid.foto,
                bannerID: artista.rashid.bannerID,
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
                bannerID: artista.adl.bannerID,
                thisIs: artista.adl.thisIs,
                color: artista.adl.color,
                foto: artista.adl.foto,
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
                color: artista.rashid.color,
                foto: artista.rashid.foto,
                bannerID: artista.rashid.bannerID,
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
                bannerID: artista.theWalters.bannerID,
                color: artista.theWalters.color,
                foto: artista.theWalters.foto,
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
                bannerID: artista.vocations.bannerID,
                color: artista.vocations.color,
                foto: artista.vocations.foto,
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
                bannerID: artista.fleetwoodMac.bannerID,
                color: artista.fleetwoodMac.color,
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
                bannerID: artista.stones.bannerID,
                color: artista.stones.color,

                foto: artista.stones.foto,
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
                bannerID: artista.d4vd.bannerID,
                color: artista.d4vd.color,
                foto: artista.d4vd.foto,
                thisIs: artista.d4vd.thisIs,
              },
            ],
            album: "Withering",
            capa: "	https://i.scdn.co/image/ab67616d00001e029a48777a54e25db0a037db48",
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
                bannerID: artista.freddieDred.bannerID,
                color: artista.freddieDred.color,
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
                bannerID: artista.lanaDelRey.bannerID,
                color: artista.lanaDelRey.color,
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
                bannerID: artista.lanaDelRey.bannerID,
                color: artista.lanaDelRey.color,
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
                bannerID: artista.lanaDelRey.bannerID,
                color: artista.lanaDelRey.color,
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
                bannerID: artista.lanaDelRey.bannerID,
                color: artista.lanaDelRey.color,
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
                color: artista.rashid.color,
                foto: artista.rashid.foto,
                bannerID: artista.rashid.bannerID,
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
                color: artista.rashid.color,
                foto: artista.rashid.foto,
                bannerID: artista.rashid.bannerID,
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
                bannerID: artista.stones.bannerID,
                color: artista.stones.color,

                foto: artista.stones.foto,
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
                bannerID: artista.stones.bannerID,
                color: artista.stones.color,

                foto: artista.stones.foto,
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
        title: "This Is The Eduardo Costa",
        color: "rgb(75, 35, 123, 1) 95%",
        image: "assets/artistas/EduardoCosta/thisIsEdCosta.jpg",
        description:
          "This is The Eduardo Costa. Todos os maiores hits em uma só playlist.",
        musicas: [
          {
            name: "Amor de Violeiro",
            artista: [
              {
                name: "Eduardo Costa",
                genre: "Sertanejo",
                bannerID: artista.eduardoCosta.bannerID,
                color: artista.eduardoCosta.color,
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
                bannerID: artista.eduardoCosta.bannerID,
                color: artista.eduardoCosta.color,
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
                bannerID: artista.eduardoCosta.bannerID,
                color: artista.eduardoCosta.color,
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
    name: "Musicas",
    exibitionHome: false,
    classe: "musicas",
    cards: [
      {
        title: "",
        image: "",
        description: "",
        musicas: [
          {
            name: "Ta Tranquilo Ta Favorável",
            artista: [
              {
                name: "Mc Bin Laden",
                genre: "Funk",
                bannerID: artista.mcBinLaden.bannerID,
                color: artista.mcBinLaden.color,
                foto: artista.mcBinLaden.foto,
              },
            ],
            capa: "https://i.scdn.co/image/ab67616d00001e023330f51ed9fac1de5f274d1e",
            album: "Ta Tranquilo Ta Favorável",
            addEm: "12 de jan. de 2016",
            durationMultipliedBy100: 411,
            liked: false,
            genre: "Funk",
          },
          {
            name: "Apesar de Você",
            artista: [
              {
                name: "Chico Buarque",
                genre: "Mpb",
                foto: artista.chicoBuarque.foto,
                bannerID: artista.chicoBuarque.bannerID,
                thisIs: artista.chicoBuarque.thisIs,
                color: artista.chicoBuarque.color,
              },
            ],
            capa: "https://i.scdn.co/image/ab67616d00001e02175c5e58d396b45c4f637deb",
            album: "Chico Buarque 1978",
            addEm: "1 de jan. de 1978",
            durationMultipliedBy100: 355,
            liked: false,
            genre: "Mpb",
          },
          {
            name: "Dreams",
            artista: [
              {
                name: "Bazzi",
                genre: "Pop",
                bannerID: artista.bazzi.bannerID,
                color: artista.bazzi.color,
                foto: artista.bazzi.foto,
                thisIs: artista.bazzi.thisIs,
              },
            ],

            capa: "https://i.scdn.co/image/ab67616d00001e02f9f2d43ff44bdfbe8c556f8d",
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
                bannerID: artista.bazzi.bannerID,
                color: artista.bazzi.color,
                foto: artista.bazzi.foto,
                thisIs: artista.bazzi.thisIs,
              },
            ],

            capa: "https://i.scdn.co/image/ab67616d00001e02f9f2d43ff44bdfbe8c556f8d",
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
                bannerID: artista.bazzi.bannerID,
                color: artista.bazzi.color,
                foto: artista.bazzi.foto,
                thisIs: artista.bazzi.thisIs,
              },
            ],

            capa: "https://i.scdn.co/image/ab67616d00001e023a376bd9b9b1f4b2686807db",
            album: "Soul Searching",
            addEm: "9 de ago. de 2019",
            durationMultipliedBy100: 245,
            liked: false,
            genre: "Pop",
          },
          {
            name: "Leave Her",
            artista: [
              {
                name: "d4vd",
                genre: "Indie",
                bannerID: artista.d4vd.bannerID,
                color: artista.d4vd.color,
                foto: artista.d4vd.foto,
                thisIs: artista.d4vd.thisIs,
              },
            ],
            album: "Withering",
            capa: "	https://i.scdn.co/image/ab67616d00001e029a48777a54e25db0a037db48",
            addEm: "25 de fev. de 2024",
            durationMultipliedBy100: 244,
            liked: false,
            genre: "Indie",
          },
          {
            name: "Here With Me",
            capa: "	https://i.scdn.co/image/ab67616d00001e0264fa1bda999f4fbd2b7c4bb7",
            artista: [
              {
                name: "d4vd",
                genre: "Indie",
                bannerID: artista.d4vd.bannerID,
                color: artista.d4vd.color,
                foto: artista.d4vd.foto,
                thisIs: artista.d4vd.thisIs,
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
    ],
  },
];
