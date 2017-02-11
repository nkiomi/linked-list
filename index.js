/**
 * Object that represents a linkted list item
 *
 * @param {Number} key
 * @constructor
 */
var LListItem = function (key) {

    this.key = (key) ? key : 0;
    this.prev = null;
    this.next = null;

};

/**
 * Object that represents a linked list
 *
 * @param {string} name
 * @constructor
 */
var LList = function (name) {

    this.name = (name) ? name : '';
    this.firstItem = null;
    this.lastItem = null;

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
var keysToInsert = [1,2,3,4,5,6,7];

keysToInsert.forEach(function (key) {
    insert(listA, new LListItem(key));
});



