class miniCard {
  image: string;
  text: string;
  hoverColor: string;
  constructor(image: string, text: string, hoverColor: string) {
    this.image = image;
    this.text = text;
    this.hoverColor = hoverColor;
  }
}
interface base {
  image: string;
  text: string;
  hoverColor: string;
}
const bases: base[] = [
  {
    image: "https://i.scdn.co/image/ab67616d00001e02141a6a520b196069616fc596",
    hoverColor: "rgb(88, 21, 15) 120%",
    text: "Pagode Do Pericão II",
  },
  {
    image:
      "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/XutSn0_6ZZetQsoHgk96xg==/dHB0cHRwdHB0cHRwdHB0cA==",
    hoverColor: "rgb(224,139, 176, 0.600) 120%",
    text: "Descobertas da Semana",
  },
  {
    image: "https://i.scdn.co/image/ab67616d00001e02d7fb3e4c63020039d1cff6b2",
    hoverColor: "rgb(11,47,86) 120%",
    text: "Young And Beautiful",
  },
  {
    image: "https://i.scdn.co/image/ab67616d00001e0269b381d574b329409bd806e6",
    hoverColor: "rgb(45, 60, 69) 100%",
    text: "Freddie's Inferno",
  },
  {
    image: "https://i.scdn.co/image/ab67616d00001e02f9f2d43ff44bdfbe8c556f8d",
    hoverColor: "rgb(11, 39, 69) 110%",
    text: "COSMIC",
  },
  {
    image: "assets/capas/moody.jpeg",
    hoverColor: "rgb(223,84,139, 0.600) 150%",
    text: "Moody Mix",
  },
  {
    image: "https://i.scdn.co/image/ab67616d00001e02136f6e8e15c00b93d12c0cf8",
    hoverColor: "rgb(39, 7, 5 ) 120%",
    text: "Confundindo Sábios",
  },
];
export const cards = bases.map((base) => {
  return new miniCard(base.image, base.text, base.hoverColor);
});
