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
    foto: "https://i.scdn.co/image/ab6761610000517476bc39d59e3ab3cf5fbcae14",
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
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3Piqqc-default.jpg",
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
    foto: " https://i.scdn.co/image/ab67616100005174d568e3af8ac0ac319678d01d",
    bannerID:
      "	https://i.scdn.co/image/ab67618600001016234986d48714d9ccd2b18e9b",
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1CLDUc-default.jpg",
    color: "rgba(80, 21, 69, 1.814) 120%",
  },

  fleetwoodMac: {
    foto: "https://i.scdn.co/image/ab67616100005174c8752dd511cda8c31e9daee8",
    bannerID:
      "	https://i.scdn.co/image/ab67618600001016c6b15528173510ab4deb8f98",
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO00KN2M-default.jpg",
    color: "rgba(169, 168, 196, 0.314) 190%",
  },

  freddieDred: {
    foto: "https://i.scdn.co/image/ab67616100005174043681a0d16ab5885a68d0e9",
    bannerID:
      "	https://i.scdn.co/image/ab676186000010161817255b3972bcfc061f822d",
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO03yOTR-default.jpg",
    color: "rgba(52, 17, 14, 1) 120%",
  },
  lanaDelRey: {
    foto: "https://i.scdn.co/image/ab67616100005174b99cacf8acd5378206767261",
    bannerID:
      "https://i.scdn.co/image/ab67618600001016adc556aaf75e626cb4a1a1be",
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evNZVVBPG-default.jpg",
    color: "rgba(20, 23, 30, 1) 60%",
  },
  mcBinLaden: {
    foto: "https://i.scdn.co/image/ab676161000051741472571ab38e76b5307585d8",
    bannerID:
      "https://i.scdn.co/image/ab6761860000101684785398d9eff76caa21aae7",
    thisIs:
      "	https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1DbVO5-default.jpg",
    color: "rgba(2, 53, 54, 1) 160%",
  },
  radiohead: {
    foto: "https://i.scdn.co/image/ab67616100005174a03696716c9ee605006047fd",
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
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3v7h3h-default.jpg",
    color: "rgba(169, 168, 196, 0.314) 190%",
  },
  stones: {
    foto: "	https://i.scdn.co/image/ab67616100005174e4cea917b68726aadb4854b8",
    bannerID:
      "https://i.scdn.co/image/ab67618600001016282f8e91da4dff9d5bee49a8",
    thisIs:
      "	https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO19s0CZ-default.jpg",
    color: "rgba(169, 168, 196, 0.314) 190%",
  },
  theWalters: {
    foto: "https://i.scdn.co/image/ab676161000051746c4366f40ea49c1318707f97",
    bannerID:
      "https://i.scdn.co/image/ab676186000010169773b5bbdc030cf349a4fde0",
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evNZWNVs5-default.jpg",
    color: "rgb(70, 42, 39, 0.800) 120%",
  },
  Vacations: {
    foto: "https://i.scdn.co/image/ab67616100005174080c868c83bba9ba37f13639",
    bannerID:
      "https://i.scdn.co/image/ab676186000010169ce635209a083bb42401e465",
    thisIs:
      "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0ti1Ik-default.jpg",
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
            capa: "https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856",
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
                thisIs: artista.rashid.thisIs,
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
            capa: "	https://i.scdn.co/image/ab67616d00001e023f764e08f367ff3925a9bf08",
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
                thisIs: artista.rashid.thisIs,
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
                thisIs: artista.theWalters.thisIs,
              },
            ],
            capa: "	https://i.scdn.co/image/ab67616d00001e029214ff0109a0e062f8a6cf0f",
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
                name: "Vacations",
                genre: "Indie",
                bannerID: artista.Vacations.bannerID,
                color: artista.Vacations.color,
                foto: artista.Vacations.foto,
                thisIs: artista.Vacations.thisIs,
              },
            ],
            capa: "https://i.scdn.co/image/ab67616d00001e023dd6e8bbc5b1ac43fd8a838c",
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
                foto: artista.fleetwoodMac.foto,
                bannerID: artista.fleetwoodMac.bannerID,
                color: artista.fleetwoodMac.color,
                thisIs: artista.fleetwoodMac.thisIs,
              },
            ],

            album: "Rumours (Super Deluxe)",
            capa: "https://i.scdn.co/image/ab67616d00001e0257df7ce0eac715cf70e519a7",
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
                thisIs: artista.stones.thisIs,
              },
            ],

            capa: "https://i.scdn.co/image/ab67616d00001e02bad7062c3fd2f2d037989694",
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
                foto: artista.freddieDred.foto,
                thisIs: artista.freddieDred.thisIs,
              },
            ],
            album: "Frank Miller (kill Again)",
            capa: "https://i.scdn.co/image/ab67616d00001e0277393fb10b6bccbd9a9748bd",
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
                thisIs: artista.mcBinLaden.thisIs,
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
          {
            name: "Amor de Violeiro",
            artista: [
              {
                name: "Eduardo Costa",
                genre: "Sertanejo",
                bannerID: artista.eduardoCosta.bannerID,
                color: artista.eduardoCosta.color,
                foto: artista.eduardoCosta.foto,
                thisIs: artista.eduardoCosta.thisIs,
              },
            ],

            capa: "https://i.scdn.co/image/ab67616d00001e024006ba2540778b9ffd224be0",
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
                foto: artista.eduardoCosta.foto,
                thisIs: artista.eduardoCosta.thisIs,
              },
            ],

            capa: "https://i.scdn.co/image/ab67616d00001e02e0ac9880d35de2d86e8849a1",
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
                foto: artista.eduardoCosta.foto,
                thisIs: artista.eduardoCosta.thisIs,
              },
            ],

            capa: "https://i.scdn.co/image/ab67616d00001e028cb2a7756160d148d551c834",
            album: "Tem tudo a ver",
            addEm: "1 de jan. de 2009",
            durationMultipliedBy100: 350,
            liked: false,
            genre: "Sertanejo",
          },
          {
            name: "Favela Vive I",
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
            album: "Favela Vive",
            capa: "https://i.scdn.co/image/ab67616d00001e02c80e63b7f1602b345362ea3c",
            addEm: "20 de set. de 2016",
            durationMultipliedBy100: 549,
            liked: false,
            genre: "Rap",
          },
          {
            name: " Limbo",
            artista: [
              {
                name: "Freddie Dredd",
                genre: "Hip-Hop",
                bannerID: artista.freddieDred.bannerID,
                color: artista.freddieDred.color,
                foto: artista.freddieDred.foto,
                thisIs: artista.freddieDred.thisIs,
              },
            ],
            album: "Freddie's Inferno",
            capa: "https://i.scdn.co/image/ab67616d00001e0269b381d574b329409bd806e6",
            addEm: "11 de ago. de 2021",
            durationMultipliedBy100: 249,
            liked: false,
            genre: "Hip-Hop",
          },
          {
            name: "Summertime Sadness",
            artista: [
              {
                name: "Lana Del Rey",
                genre: "Pop",
                bannerID: artista.lanaDelRey.bannerID,
                color: artista.lanaDelRey.color,
                foto: artista.lanaDelRey.foto,
                thisIs: artista.lanaDelRey.thisIs,
              },
            ],
            album: "Born To Die",
            capa: "	https://i.scdn.co/image/ab67616d00001e02ebc8cfac8b586bc475b04918",
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
                foto: artista.lanaDelRey.foto,
                thisIs: artista.lanaDelRey.thisIs,
              },
            ],
            album: "Young And Beautiful",
            capa: "https://i.scdn.co/image/ab67616d00001e02d7fb3e4c63020039d1cff6b2",
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
                foto: artista.lanaDelRey.foto,
                thisIs: artista.lanaDelRey.thisIs,
              },
            ],
            album: "Born To Die",
            capa: "	https://i.scdn.co/image/ab67616d00001e02ebc8cfac8b586bc475b04918",
            addEm: "1 de jan. de 2012",
            durationMultipliedBy100: 334,
            liked: false,
            genre: "Pop",
          },
          {
            name: "Mil Cairão",
            artista: [
              {
                name: "Rashid",
                genre: "Rap",
                color: artista.rashid.color,
                foto: artista.rashid.foto,
                bannerID: artista.rashid.bannerID,
                thisIs: artista.rashid.thisIs,
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
                thisIs: artista.rashid.thisIs,
              },
            ],
            album: "Gratidão",
            capa: "https://i.scdn.co/image/ab67616d00001e02807fe591c189e35125945479",
            addEm: "21 fev. 2024",
            durationMultipliedBy100: 334,
            liked: false,
            genre: "Rap",
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
                thisIs: artista.stones.thisIs,
              },
            ],

            capa: "https://i.scdn.co/image/ab67616d00001e02bad7062c3fd2f2d037989694",
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
                thisIs: artista.stones.thisIs,
              },
            ],
            album: "Let It Bleed",
            capa: "	https://i.scdn.co/image/ab67616d00001e022af30c881bb23cfb82a8cf99",
            addEm: "5 de dez. de 1969",
            durationMultipliedBy100: 334,
            liked: false,
            genre: "Rock",
          },
        ],
      },
    ],
  },
];
