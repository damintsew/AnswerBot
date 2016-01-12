
var TelegramBot = require('node-telegram-bot-api');
var MenuCreator = require('./src/menu/MenuCreator');

var token = '162821501:AAGRvcrQc6-uQTsniVUJDkL-hCpovE7m76A';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

var message = "		Привет, всегда рады Вам! \n\n" +
    "Контакты для Стерлитамака:\n" +
    "jabber <впиши что хочешь>\n " +
    "телеграм:<впиши что хочешь>\n " +
    "поддержка бота:jabber <впиши что хочешь>\n " +
    "Пожалуйста, введите код товара для покупки:\n " +
    "1 ) АуЕнНыЙ КРИСТАЛЛ 0.3гр - 900 руб - 21 шт\n" +
    "2 ) АуЕнНыЙ КРИСТАЛЛ 0.5гр - 1200 руб - 11 шт\n" +
    "3 ) АуЕнНыЙ КРИСТАЛЛ 1гр+бонус - 2200 руб - 1 шт\n" +
    "4 ) АуЕнНыЙ КРИСТАЛЛ 3гр+бонус+ - 5800 руб - 1 шт\n";

var menu = new MenuCreator();
var userMap = {};

// Any kind of message
bot.on('text', function (msg) {

    console.log(msg.text);
    var chatId = msg.chat.id;

    var menuItem = userMap[chatId];

    if (!menuItem) {
        menuItem = menu.getRootElement();
    } else {
        var newItem = menuItem.select(msg.text);

        if (newItem) {
            menuItem = newItem;
        }
    }

    userMap[chatId] = menuItem;

    bot.sendMessage(chatId, menuItem.print());
});


