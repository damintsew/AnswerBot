/**
 * @author adamintsev, <a href="mailto:Andrey.Damintsev@returnonintelligence.com">Andrey Damintsev</a>
 * @since 09 ﬂÌ‚. 2016
 */

var Product = require('../domain/Domain').Product;

var ProductRepository = {};
module.exports = ProductRepository;

ProductRepository.search = function(parsedMsg) {
    return Product.findOne({name: parsedMsg.product});
};