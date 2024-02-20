import { Pl, musics } from "@/mocks/playlists-albuns";

export function extrairMusicasLiked(playlists: Pl[]): musics[] {
  const musicasLiked: musics[] = [];

  // Itere sobre todas as playlists
  playlists.forEach((playlist) => {
    // Itere sobre todos os cards da playlist atual
    playlist.cards.forEach((card) => {
      // Itere sobre todas as músicas do card atual
      card.musicas.forEach((musica) => {
        // Verifique se a música está 'liked' e adicione-a ao array 'musicasLiked' se estiver
        if (musica.liked) {
          musicasLiked.push(musica);
        }
      });
    });
  });

  return musicasLiked;
}
