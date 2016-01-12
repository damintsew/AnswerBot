/**
 * @author adamintsev, <a href="mailto:Andrey.Damintsev@returnonintelligence.com">Andrey Damintsev</a>
 * @since 08 ﬂÌ‚. 2016
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NutrientsBot');

var db = mongoose.connection;
db.on('error', function(err) {
    console.log(err);
});

var ParsedMessage = function ParsedMessage(originalMsg, product, weight) {

    var thisModel = this;

    this.product = product;
    this.weight = weight;
    this.originalMsg = originalMsg;

    this.isParsed = function() {
        return !!thisModel.product;
    }
};

var Product = mongoose.model('Product', {
    name: String,
    code: String,
    info: {
        proteins: Number,
        fat: Number,
        carbohydrates: Number
    }
});

module.exports = {
    Product: Product,
    ParsedMessage: ParsedMessage
};