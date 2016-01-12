/**
 * @author adamintsev, <a href="mailto:Andrey.Damintsev@returnonintelligence.com">Andrey Damintsev</a>
 * @since 09 Янв. 2016
 */

var ResponseFormatter = {};
module.exports = ResponseFormatter;

var ERROR_REQ = "'/error \"ваш запрос\"";

ResponseFormatter.formatMessage = function(product) {
    var responseText = product.name +
        "В 100 граммах продукса содержатся:" +
        "   - белки: " +  product.info.proteins +
        "   - жиры: " +  product.info.fat +
        "   - углеводы: " +  product.info.carbohydrates;

    return responseText;
};

ResponseFormatter.errorParseResponse = function(msg) {
    var reqMsg = msg || ERROR_REQ;
    return "Не получилось распознать запрос. Попробуйте перефразировать его. Если ошибка возникает, то напишите " +
        reqMsg;
};

ResponseFormatter.errorFindProduct = function(msg) {
    var reqMsg = msg || ERROR_REQ;
    return "Не получилось найти продукт. Попробуйте еще раз." +
        "Если в дальнейшем возникает ошибка напишите " + reqMsg;
};