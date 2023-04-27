import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {SnippetResolver} from './examples/snippet-resolver';
import {exampleLanguage, exampleSnippetType} from './examples/examples';

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
  const snippetResolver = new SnippetResolver();
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
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_, language, snippetType, snippetId] = exampleId.split(':');
          return snippetResolver.resolveSnippet(
            exampleLanguage(language),
            exampleSnippetType(snippetType),
            snippetId
          );
        }
      );
    });
  }
  return transformer;
}

module.exports = plugin;
