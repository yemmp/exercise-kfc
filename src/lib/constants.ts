export const lojasURL = "http://localhost:8080/estados";
export const produtosURL = "http://localhost:8080/produtos";

export const navbarContent = [
  { route: "/", name: "Home" },
  { route: "/kfc-mais-proximo", name: "Kfc mais próximo" },
  {
    route:
      "https://www.ifood.com.br/delivery/descobrir/lista/chain:e2b75ff9-285b-400a-b0c8-28c52170c387?source_caller=unknown&shortlink=KFC&c=KFC&pid=lista_parceiro&af_click_lookback=7d&af_force_deeplink=true",
    name: "Peça Agora",
  },
  { route: "/cupons", name: "Cupons" },
];
export const footerContent = [
  ...navbarContent,
  { route: "/regulamentos", name: "Regulamentos" },
  { route: "/fale-conosco", name: "Fale Conosco" },
  {
    route:
      "/https://cdn.qr-code-generator.com/account20104312/45298887_1.pdf?Expires=1716351070&Signature=rXv~rCbCKkBcw4zf9jQegDkTFgLhADnsFyqe-0ubB3mz9DaqSgtZ-CW95ZoLCTDLlF6UDOECa2hFVLr302KRAKfVnr~1RPfL2rCitBuFuE~3eGJ1spLvuxxpVTKP~6HytKv10ZZKSLcI2uaM3X1seVpmwKVAXe~sFBcAPeQqIwQxr0tOoliSjxyhnfnrflxHFR2KaIstGfX9qZGhaecDsfJNbYU0pYUMXrbGKS5Nv4-THzmeyLGx3hZNDlSGLXWwO8lxU~Ky3ffPgIc8qRtRNNs0au7Jvi8JN4VSVNvyKzBVK2tXEugkp11VhSyyjXcGZlW1kv9qMbfF39u8A5er2Q__&Key-Pair-Id=KKMPOJU8AYATR",
    name: "Tabela Nutricional",
  },
];
export const socialMedia = [
  { icon: "TikTok", url: "https://www.tiktok.com/@kfcbrasil" },
  { icon: "X", url: "https://x.com/kfcbrasil?lang=pt" },
  { icon: "Instagram", url: "https://www.instagram.com/kfcbrasil/" },
  { icon: "Facebook", url: "https://www.facebook.com/KFCBrasil" },
  { icon: "Youtube", url: "https://www.youtube.com/c/KFCBrasilOriginal" },
];

export type TCupom = {
  img_url: string;
  name: string;
  includes: string;
  price: string;
  id: string;
};
