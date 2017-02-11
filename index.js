/**
 * Object that represents a linkted list item
 *
 * @param {Number} key
 * @param {LListItem} prev
 * @param {LListItem} next
 * @constructor
 */
var LListItem = function (key, prev, next) {

    this.key = (key) ? key : 0;
    this.prev = (prev) ? prev : null;
    this.next = (next) ? next : null;

};

/**
 * Object that represents a linked list
 *
 * @param {LListItem} firstItem
 * @param {LListItem} lastItem
 * @constructor
 */
var LList = function (firstItem, lastItem) {

    this.firstItem = (firstItem) ? firstItem : null;
    this.lastItem = (lastItem) ? lastItem : null;

};






