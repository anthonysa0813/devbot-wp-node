function MessageText(textResponse, number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    text: {
      preview_url: true,
      body: textResponse,
    },
    type: "text",
  });
  return data;
}

function MessageList(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: "✅Elige una opción",
      },
      footer: {
        text: "Selecciona una de las opciones para poder atenderte",
      },
      action: {
        button: "Ver opciones",
        sections: [
          {
            title: "Saber de Contact BPO",
            rows: [
              {
                id: "main-saber",
                title: "Saber de Contact BPO",
                description: "Breve descripción acerca de quiénes somos",
              },
              {
                id: "main-industria",
                title: "Industrias",
                description:
                  "Ver la lista de industria donde contamos con experiencia.",
              },
            ],
          },
          {
            title: "📍Centro de atención",
            rows: [
              {
                id: "main-agencia",
                title: "Agencia",
                description: "Puedes visitar nuestra agencia.",
              },
              {
                id: "main-contacto",
                title: "Centro de contacto",
                description: "En breve te atenderá uno de nuestro agentes.",
              },
            ],
          },
        ],
      },
    },
  });
  return data;
}
function MessageComprar(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "Selecciona uno de los productos",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "option-laptop",
              title: "Laptop",
            },
          },
          {
            type: "reply",
            reply: {
              id: "option-computadora",
              title: "Computadora",
            },
          },
        ],
      },
    },
  });
  return data;
}

function MessageLocation(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "location",
    location: {
      latitude: "-12.067158831865067",
      longitude: "-77.03377940839486",
      name: "Estadio Nacional del Perú",
      address: "C. José Díaz s/n, Cercado de Lima 15046",
    },
  });
  return data;
}

module.exports = {
  MessageText,
  MessageList,
  MessageComprar,
  MessageLocation,
};
