export function resource() {
  var calendario = [
    {
      nome: "agosto/2015",
      eventos: [
        {
          nome: "Startup Weekend",
          descricao: "Descrição superficial deste evento.",
          imagem: "img/fotoEvento.png",
          dias: "10"
        },
        {
          nome: "Festa beneficiente",
          descricao: "Em algum lugar por ai.",
          imagem: "img/fotoEvento.png",
          dias: "11 - 13"
        }
      ]
    },
    {
      nome: "setemrbo/2015",
      eventos: [
        {
          nome: "Startup Weekend",
          descricao: "Descrição superficial deste evento.",
          imagem: "img/fotoEvento.png",
          dias: "10"
        },
        {
          nome: "Festa beneficiente",
          descricao: "Em algum lugar por ai.",
          imagem: "img/fotoEvento.png",
          dias: "11 - 13"
        }
      ]
    }
  ];

  return {
    buscar() {
      return new Promise(resolve => resolve(calendario));
    }
  };
}