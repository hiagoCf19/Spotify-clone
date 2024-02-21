import { Pl, musics, playlists } from "./playlists-albuns";
export interface BrowseAll {
  genre: string;
  musics: musics[];
  background: string;
  image: string;
}
function filterGenre(genre: string): musics[] {
  let musicsfilter: musics[] = [];

  playlists.forEach((cards: Pl) => {
    cards.cards.forEach((music) => {
      const filtrados = music.musicas.filter((musica) => {
        return musica.genre === genre;
      });
      musicsfilter = musicsfilter.concat(filtrados);
    });
  });
  return musicsfilter;
}

export const BrowseAll: BrowseAll[] = [
  {
    genre: "Podcasts",
    musics: filterGenre("Podcast"),
    background: "bg-[#906be7]",
    image: "assets/capas/podcast/podcast.jpeg",
  },
  {
    genre: "Rap",
    musics: filterGenre("Rap"),
    background: "bg-[#1e3263]",
    image: "assets/capas/rap/rap.jpeg",
  },
  {
    genre: "Funk",
    musics: filterGenre("Funk"),
    background: "bg-[#e64332]",
    image: "assets/capas/funk/funkBr.jpeg",
  },
  {
    genre: "Hip-Hop",
    musics: filterGenre("Hip-Hop"),
    background: "bg-[#f19b2e]",
    image: "assets/capas/HipHop/hipHop.jpeg",
  },
  {
    genre: "Indie",
    musics: filterGenre("Indie"),
    background: "bg-[#499EC2]",
    image: "assets/capas/indie/indie.jpeg",
  },
  {
    genre: "Mpb",
    musics: filterGenre("Mpb"),
    background: "bg-[#7d4b31]",
    image: "assets/capas/mpb/mpb.jpeg",
  },
  {
    genre: "Summer",
    musics: filterGenre("Summer"),
    background: "bg-[#4f374f]",
    image: "assets/capas/summer/summer.jpeg",
  },
  {
    genre: "Pop",
    musics: filterGenre("Pop"),
    background: "bg-[#0c73eb]",
    image: "assets/capas/pop/pop.png",
  },
  {
    genre: "Rock",
    musics: filterGenre("Rock"),
    background: "bg-[#777777]",
    image: "assets/capas/rock/rock.jpeg",
  },
  {
    genre: "Sertanejo",
    musics: filterGenre("Hip-Hop"),
    background: "bg-[#2b2045]",
    image: "assets/capas/sertanejo/sertanejo.jpeg",
  },
];
