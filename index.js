/**
 * Object that represents a linkted list item
 *
 * @param {Number} key
 * @constructor
 */
function LListItem(key) {

    this.key = (key) ? key : 0;
    this.prev = null;
    this.next = null;

}

/**
 * Object that represents a linked list
 *
 * @param {string} name
 * @constructor
 */
function LList(name) {

    this.name = (name) ? name : '';
    this.firstItem = null;
    this.lastItem = null;

}

LList.prototype.print = function () {
    var self = this;
    var str = '----------\nList: ' + self.name + '\n';

    str += 'Items: ';

    var curr = this.firstItem;

    while (curr) {
        if (curr.next) {
            str += ' ' + curr.key + ', ';
        } else {
            str += ' ' + curr.key;
        }
        curr = curr.next;
    }

    str += '\n----------\n';

    return str;

};

/**
 *
 * @param {LList} list
 * @param {LListItem} item
 */
function insert (list, item) {

    if (!(list instanceof LList)) {
        throw new Error('list param is not instance of LList');
    }

    if(!(item instanceof LListItem)){
        throw new Error('item param is not instance of LListItem');
    }

    // empty list
    if (!(list.lastItem)) {
        list.firstItem = item;
        list.lastItem = item;
        return;
    }

    var oldLastItem = list.lastItem;

    // non-empty list
    oldLastItem.next = item;
    item.prev = oldLastItem;
    list.lastItem = item;

}

var listA = new LList('List A');
var keysToInsert = [1,2,3, 8, 92,3,3332];

keysToInsert.forEach(function (key) {
    insert(listA, new LListItem(key));
});

console.log(listA.print());



