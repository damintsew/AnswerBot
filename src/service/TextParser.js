/**
 * @author adamintsev, <a href="mailto:Andrey.Damintsev@returnonintelligence.com">Andrey Damintsev</a>
 * @since 07 ���. 2016
 */

var ParsedMessage = require('../domain/Domain').ParsedMessage;

var TextParser = {};
module.exports = TextParser;

var wordRegExp = new RegExp("([А-Яа-я]+)");
var digitRegExp = new RegExp("(\d+)");

TextParser.parse = function(msg) {
    var parsedMsg = new ParsedMessage(msg);

    if (!isCorrectPhrase(msg)) {
        return parsedMsg;
    }

    parsedMsg.product = extractText(msg);
    parsedMsg.weight = extractWeight(msg);

    return parsedMsg;
};

function isCorrectPhrase(text) {
    return wordRegExp.test(text);
}

function extractText(unparsedText) {
    var result = wordRegExp.exec(unparsedText);

    if (result) {
        return result[0];
    }
    return null;
}

function extractWeight(unparsedText) {
    var result = digitRegExp.exec(unparsedText);

    if (result) {
        return result[0];
    }
    return null;
}
