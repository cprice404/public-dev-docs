import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';

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

function markdownNodeContainsExampleSnippets<T extends unist.Node>(
  node: unknown
): node is T {
  const unistNode = node as unist.Node;
  if (unistNode.type === 'text' || unistNode.type === 'code') {
    const literal = unistNode as unist.Literal;
    const value = literal.value as string;
    if (value.includes('%%%example:')) {
      return true;
    }
  }
  return false;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function plugin(options: unknown): unknown {
  console.log('LOADING EXAMPLE SNIPPETS PLUGIN!');
  function transformer(tree: unist.Node) {
    visit(tree, markdownNodeContainsExampleSnippets, node => {
      console.log(
        'Found a markdown node that contains example snippets.  Replacing content.'
      );

      const literal = node as unist.Literal;
      const value = literal.value as string;

      literal.value = value.replace(
        /%%%([^%]*)%%%/g,
        (match: string, exampleId: string) => {
          return temporaryHardCodedCodeSnippets.get(exampleId) ?? '';
        }
      );
    });
  }
  return transformer;
}

module.exports = plugin;
