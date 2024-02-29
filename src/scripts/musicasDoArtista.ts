import { musics, playlists } from "@/mocks/playlists-albuns";

export const extrairMusicasPorArtista = (artistName: string): musics[] => {
  const musicasNomeUnico: Set<string> = new Set();
  const musicasEncontradas: musics[] = [];

  playlists.forEach((playlist) => {
    playlist.cards.forEach((card) => {
      card.musicas.forEach((musica) => {
        if (musica.artista.some((artista) => artista.name === artistName)) {
          if (!musicasNomeUnico.has(musica.name)) {
            musicasNomeUnico.add(musica.name);
            musicasEncontradas.push(musica);
          }
        }
      });
    });
  });

  return musicasEncontradas;
};
