import { Pl, artista, musics } from "@/mocks/playlists-albuns";

export const extrairArtistas = (playlists: Pl[]) => {
  const artistas: artista[] = [];
  playlists.forEach((playlist) => {
    playlist.cards.forEach((card) => {
      card.musicas.forEach((musica) => {
        musica.artista.forEach((artista) => {
          artistas.push(artista);
        });
      });
    });
  });

  return artistas;
};
export const extrairMusicas = (playlists: Pl[]) => {
  const musicas: musics[] = [];

  playlists.forEach((playlist) => {
    playlist.cards.forEach((card) => {
      card.musicas.forEach((musica) => {
        musicas.push(musica);
      });
    });
  });

  return musicas;
};
