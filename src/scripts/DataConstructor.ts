import { musics } from "@/mocks/playlists-albuns";

export class Album {
  title: string;
  image: string;
  description: string;

  constructor(name: string, capa: string, data: string) {
    this.title = name;
    this.image = capa;
    this.description = data;
  }
}
// O parâmetro musicas tem que corresponder extatamente ao array de músicas do nosso objeto
export function constructorSinglesAndAlbuns(
  musicas: musics[],
  isAlbum: boolean
) {
  const uniqueSet = new Set();

  return musicas
    .filter((musica) =>
      isAlbum ? musica.album !== musica.name : musica.album === musica.name
    )
    .filter((musica) => {
      if (!uniqueSet.has(musica.album)) {
        uniqueSet.add(musica.album);
        return true;
      }
      return false;
    })
    .map((item) => {
      return new Album(item.album, item.capa ?? "", item.artista[0].name);
    });
}
