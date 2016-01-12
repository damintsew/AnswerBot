
var menu = require('./Menu');

var errorInput = "Ошибка выбора.";

var TelegramMenu = function() {

    var root = addItem(menu);

    root.print();

    this.getRootElement = function() {
        return root;
    };
};

var MenuItem = function(owner) {
    var self = this;
    //self.title = title;
    //self.handler = handler;
    //self.label = label;
    self.children = [];


    self.owner = owner;// : self.owner = self;
    //args ? self.args = args : self.args = [];

    this.addChild = function(child) {
        child.owner = self;

        self.children.push(child);
    };

    this.print = function() {
        var text = self.title + "\n";
        self.children.forEach(function(child, i) {
            text += formatChildLabel(child);
        });

        if(self.footer) {
            text += "\n" + self.footer;
        }

        console.log(text);
        return text;
    };

    this.select = function(number) {
        //var number = parseInt(selected, 10);
        if (number === "0" || number === 0) {
            return self.owner;
        }

        if (!self.isCorrectAnswer(number)) {
            return null; //todo ?
        }

        var selectedItems = self.children.filter(function(child) {
            return child.number === number;
        });

        return selectedItems.length > 0 ? selectedItems[0] : null;
    };

    this.isCorrectAnswer = function (number) {

        if (isNaN(number)) {
            return false;
        }

        var existingNumbers = self.children.map(function (child) {
            return child.number;
        });

        return existingNumbers.indexOf(number) !== -1;
    };
};

function formatChildLabel(child) {
    var res = "\t";

    if (child.number != undefined)
        res += child.number + ") ";

    res += child.label + "\n";

    return res;
}

module.exports = TelegramMenu;

TelegramMenu.init = function() {


    
};


function addItem(item) {
    var self = this;

    var menuItem = new MenuItem;
    menuItem.title = item.title;
    menuItem.label = item.label;
    menuItem.number = item.number;
    menuItem.footer = item.footer;

    if (item.sub) {
        item.sub.forEach(function(subItem){
            var child = addItem(subItem);
            menuItem.addChild(child);
        });
    }

    return menuItem;
}
