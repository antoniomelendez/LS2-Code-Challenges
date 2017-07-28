/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */

 // const breadthFirstSearch = (tree, child) => {
 //   const queue = [this];
 //   let n;
 //   while (queue.length > 0) {
 //     n = queue.shift();
 //
 //     if(!n.tree) {
 //       continue;
 //     }
 //     for (let i = 0; i < n.tree.length; i++) {
 //       queue.push(n.tree[i]);
 //     }
 //   }
 // };
 const breadthFirstSearch = (tree, value) => {
   Object.keys(tree).forEach((key) => {
     if (typeof tree[key] === 'object') {
       return breadthFirstSearch(tree[key]);
     }
     if (value === tree[key]) {
      return tree[key];
     }
   })
 }
