const quotes = [
  {
    quote:
      "“ El río es una estructura integrada y viva y lo que ocurra río arriba impactará río abajo y viceversa ”",
    autor: "Dr. Jorge D. Abad",
    cargoAutor: "Director Ejecutivo CITA - UTEC",
  },
  {
    quote:
      "“ El agua puede ser constante, pero el sedimento no. Si te paras en un mismo lugar en el río Huallaga, a lo largo del día vas a encontrar diferente caudal de sedimento ”",
    autor: "Dr. Jorge D. Abad",
    cargoAutor: "Director Ejecutivo CITA - UTEC",
  },
  {
    quote:
      "“ El río tiene miles de años moviéndose, transportando agua, sedimentos, intercambiando con el bosque amazónico ”",
    autor: "Dr. Jorge D. Abad",
    cargoAutor: "Director Ejecutivo CITA - UTEC",
  },
];

export const generarRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
