const restify = require('restify');
const builder = require('botbuilder');

// Setup Restify Server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`${server.name} listening to ${server.url}`);
});

// Create chat connector for communicating with the Bot Framework Service
const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Create your bot with a function to receive messages from the user
const bot = new builder.UniversalBot(connector, (session) => {
  const msg = new builder.Message(session);
  msg.attachmentLayout(builder.AttachmentLayout.carousel);
  msg.attachments([
    new builder.HeroCard(session)
    .title('CORRALÍSIMA ½ LIBRA')
    .subtitle('Media libra de carne de res asada a la parrilla, con salsa BBQ.')
    .text('$19.900')
    .images([builder.CardImage.create(session, 'http://www.elcorral.com/wp-content/uploads/2012/01/media-libra.png')])
    .buttons([
      builder.CardAction.imBack(session, 'buy corralisima', 'Buy'),
    ]),
    new builder.HeroCard(session)
    .title('CORRALÍSIMA TODOTERRENO')
    .subtitle('Dos porciones de ¼ de lb. De carne de res asada a la parrilla, con tocineta, queso mozzarela, vegetales, pepinillos y salsa BBQ.')
    .text('$39.900')
    .images([builder.CardImage.create(session, 'http://www.elcorral.com/wp-content/uploads/2012/01/Corralisima.png')])
    .buttons([
      builder.CardAction.imBack(session, 'buy todoterreno', 'Buy'),
    ]),
    new builder.HeroCard(session)
    .title('CORRALITO HAMBURGUESA')
    .subtitle('Con Hamburguesa de 90gr. o Lomitos de Pollo, papas a la francesa, jugo o gaseosa pequeña y dulce sorpresa.')
    .text('$19.900')
    .images([builder.CardImage.create(session, 'http://www.elcorral.com/wp-content/uploads/2012/01/menuCorralitoHamburguesa.png')])
    .buttons([
      builder.CardAction.imBack(session, 'buy corralito', 'Buy'),
    ]),
  ]);
  session.send(msg).endDialog();
});
