import visit from 'unist-util-visit';
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-assignment
// const visit = require('unist-util-visit');
// import {Plugin, Optio} from 'unified';
// import {} from 'mdast';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
// import {TestFunctionAnything} from 'unist-util-is';
// import {TestFunction} from 'unist-util-is';

// for this POC, here we define some hard-coded example snippets.  In the real, working version of this plugin,
// there would be some code to pull this stuff from the sdk git repos.
const temporaryHardCodedCodeSnippets = new Map([
  [
    'example:typescript:code:ListCaches',
    'This snippet would be pulled from the node.js repo and contain sample code for listing caches in TS',
  ],
  [
    'example:go:description:Logging',
    'This snippet would be pulled from the go repo, and contain prose about logging support in our Golang SDK',
  ],
  [
    'example:go:code:Logging',
    'This snippet would be pulled from the go repo, and contain example code illustrating logging support.',
  ],
]);

/*

  type TestFunction<T extends Node> = (
    node: unknown,
    index?: number,
    parent?: Parent
  ) => node is T
 */

function poop<T extends unist.Node>(node: unknown): node is T {
  // function markdownNodeContainsExampleSnippets(node: unist.Node) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (node.type === 'text' || node.type === 'code') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    if (node.value.includes('%%%example:')) {
      return true;
    }
  }
  return false;
}

// const foo: (node: unknown) => node is unist.Node = (node: unknown) => {
//   // function markdownNodeContainsExampleSnippets(node: unist.Node) {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   if (node.type === 'text' || node.type === 'code') {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
//     if (node.value.includes('%%%example:')) {
//       return true;
//     }
//   }
//   return false;
// };

function plugin(options: any): any {
  console.log('LOADING EXAMPLE SNIPPETS PLUGIN!');
  function transformer(tree: unist.Node) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    visit(tree, poop, node => {
      console.log(
        'Found a markdown node that contains example snippets.  Replacing content.'
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      node.value = node.value.replace(
        /%%%([^%]*)%%%/g,
        (match: any, exampleId: any) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          return temporaryHardCodedCodeSnippets.get(exampleId);
        }
      );
    });
  }
  return transformer;
}

module.exports = plugin;
// export default plugin;
