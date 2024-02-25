import { Pl, musics, playlists } from "./playlists-albuns";
export interface InterfaceBrowseAll {
  genre: string;
  musics: musics[];
  background: string;
  capa: string;
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

export const BrowseAll: InterfaceBrowseAll[] = [
  {
    genre: "Podcasts",
    musics: filterGenre("Podcast"),
    background: "bg-[#906be7]",
    capa: "assets/capas/podcast.jpeg",
  },
  {
    genre: "Rap",
    musics: filterGenre("Rap"),
    background: "bg-[#1e3263]",
    capa: "assets/capas/rap.jpeg",
  },
  {
    genre: "Funk",
    musics: filterGenre("Funk"),
    background: "bg-[#e64332]",
    capa: "assets/capas/funkBr.jpeg",
  },
  {
    genre: "Hip-Hop",
    musics: filterGenre("Hip-Hop"),
    background: "bg-[#f19b2e]",
    capa: "assets/capas/hipHop.jpeg",
  },
  {
    genre: "Indie",
    musics: filterGenre("Indie"),
    background: "bg-[#499EC2]",
    capa: "assets/capas/indie.jpeg",
  },
  {
    genre: "Mpb",
    musics: filterGenre("Mpb"),
    background: "bg-[#7d4b31]",
    capa: "assets/capas/mpb.jpeg",
  },
  {
    genre: "Summer",
    musics: filterGenre("Summer"),
    background: "bg-[#4f374f]",
    capa: "assets/capas/summer.jpeg",
  },
  {
    genre: "Pop",
    musics: filterGenre("Pop"),
    background: "bg-[#0c73eb]",
    capa: "assets/capas/pop.png",
  },
  {
    genre: "Rock",
    musics: filterGenre("Rock"),
    background: "bg-[#777777]",
    capa: "assets/capas/rock.jpeg",
  },
  {
    genre: "Sertanejo",
    musics: filterGenre("Sertanejo"),
    background: "bg-[#2b2045]",
    capa: "assets/capas/sertanejo.jpeg",
  },
];
