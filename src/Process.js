/**
 * @author adamintsev, <a href="mailto:Andrey.Damintsev@returnonintelligence.com">Andrey Damintsev</a>
 * @since 08 ���. 2016
 */

var menu = require('./menu/MenuCreator');
var Promise = require('bluebird');


var Processor = {};
module.exports = Processor;

var userMap = {};

Processor.processMessage = function(msg) {
    console.log(msg.text);
    var chatId = msg.chat.id;

    var menuItem;

    if (!userMap[chatId]) {
        menuItem = menu.getRootElement();
    } else {

    }

    bot.sendMessage(chatId, menuItem.print());
};