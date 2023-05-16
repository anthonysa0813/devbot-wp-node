const whatsappModel = require("./whatsappmodels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number) {
  textUser = textUser.toLowerCase();
  var models = [];

  if (
    textUser.includes("hola") ||
    textUser.includes("hi" || textUser.includes("hol"))
  ) {
    //SAUDAR
    var model = whatsappModel.MessageText(
      "Hola, somos Contact BPO. 👋",
      number
    );
    models.push(model);
    var modelList = whatsappModel.MessageList(number);
    models.push(modelList);
  } else if (textUser.includes("gracias")) {
    // agradecimiento
    var model = whatsappModel.MessageText(
      "Gracias a ti por escribirme. 😉😎",
      number
    );
    models.push(model);
  } else if (
    textUser.includes("adios") ||
    textUser.includes("adiós") ||
    textUser.includes("chau") ||
    textUser.includes("bye") ||
    textUser.includes("me voy")
  ) {
    // despedir
    var model = whatsappModel.MessageText("Nos vemos. 😊", number);
    models.push(model);
  } else if (textUser.includes("saber de contact bpo")) {
    // comprar
    var model = whatsappModel.MessageComprar(number);
    models.push(model);
  } else if (textUser.includes("industrias")) {
    // vender
    var model = whatsappModel.MessageText(
      "👉 Regístrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665",
      number
    );
    models.push(model);
  } else if (textUser.includes("agencia")) {
    // agencia
    var model = whatsappModel.MessageText(
      "Aquí tienes nuestra dirección. 😊",
      number
    );
    models.push(model);
    var modelLocation = whatsappModel.MessageLocation(number);
    models.push(modelLocation);
  } else if (textUser.includes("centro de contacto")) {
    // vender
    var model = whatsappModel.MessageText(
      "📞*Centro de contacto:*\n912345678",
      number
    );
    models.push(model);
  } else {
    //No entiende
    var model = whatsappModel.MessageText("No entiendo lo que dices", number);
    models.push(model);
  }

  models.forEach((model) => {
    whatsappService.SendMessageWhatsApp(model);
  });
}

module.exports = {
  Process,
};
