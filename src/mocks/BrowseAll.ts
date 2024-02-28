import { Pl, musics, playlists } from "./playlists-albuns";
export interface InterfaceBrowseAll {
  genre: string;
  musics: musics[];
  background: string;
  capa: string;
}
export function filterMusicPorGenre(genre: string): musics[] {
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
    musics: filterMusicPorGenre("Podcast"),
    background: "bg-[#906be7]",
    capa: "assets/capas/podcast.jpeg",
  },
  {
    genre: "Rap",
    musics: filterMusicPorGenre("Rap"),
    background: "bg-[#1e3263]",
    capa: "assets/capas/rap.jpeg",
  },
  {
    genre: "Funk",
    musics: filterMusicPorGenre("Funk"),
    background: "bg-[#e64332]",
    capa: "assets/capas/funkBr.jpeg",
  },
  {
    genre: "Hip-Hop",
    musics: filterMusicPorGenre("Hip-Hop"),
    background: "bg-[#f19b2e]",
    capa: "assets/capas/hipHop.jpeg",
  },
  {
    genre: "Indie",
    musics: filterMusicPorGenre("Indie"),
    background: "bg-[#499EC2]",
    capa: "assets/capas/indie.jpeg",
  },
  {
    genre: "Mpb",
    musics: filterMusicPorGenre("Mpb"),
    background: "bg-[#7d4b31]",
    capa: "assets/capas/mpb.jpeg",
  },
  {
    genre: "Summer",
    musics: filterMusicPorGenre("Summer"),
    background: "bg-[#4f374f]",
    capa: "assets/capas/summer.jpeg",
  },
  {
    genre: "Pop",
    musics: filterMusicPorGenre("Pop"),
    background: "bg-[#0c73eb]",
    capa: "assets/capas/pop.png",
  },
  {
    genre: "Rock",
    musics: filterMusicPorGenre("Rock"),
    background: "bg-[#777777]",
    capa: "assets/capas/rock.jpeg",
  },
  {
    genre: "Sertanejo",
    musics: filterMusicPorGenre("Sertanejo"),
    background: "bg-[#2b2045]",
    capa: "assets/capas/sertanejo.jpeg",
  },
];
