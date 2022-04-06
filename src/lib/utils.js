const { ListNode } = require("../../extensions/list-node");

const arrayToList = arr =>
    arr.reverse().reduce((acc, cur) => {
        if (acc) {
            const node = new ListNode(cur);
            node.next = acc;
            return node;
        }
        return new ListNode(cur);
    }, null);

module.exports= { arrayToList };