/**
 * @author adamintsev, <a href="mailto:Andrey.Damintsev@returnonintelligence.com">Andrey Damintsev</a>
 * @since 10 ﬂÌ‚. 2016
 */

var Bot = function Bot(_token) {
    var token = _token;
    var handlers = [];

    this.addHandler = function (handler) {
        handlers.push(handler);
    };

    this.emit = function(message) {

    }

};

module.exports = Bot;