import visit from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import * as unist from 'unist';
import {SNIPPET_RESOLVER} from './examples/snippet-resolver';
import {exampleLanguage, exampleSnippetType} from './examples/examples';

function markdownNodeContainsExampleSnippets<T extends unist.Node>(
  node: unknown
): node is T {
  const unistNode = node as unist.Node;
  // console.log(`CHECKING NODE: ${unistNode.type}`);
  if (
    unistNode.type === 'text' ||
    unistNode.type === 'code'
    // ||
    // unistNode.type === 'jsx'
  ) {
    // if (unistNode.type === 'jsx') {
    //   console.log(`JSX NODE VALUE: ${(node as unist.Literal).value as string}`);
    // }
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
  // console.log('LOADING EXAMPLE SNIPPETS PLUGIN!');
  // const snippetResolver = createSnippetResolver();
  function transformer(tree: unist.Node) {
    visit(tree, markdownNodeContainsExampleSnippets, node => {
      // console.log(
      //   'Found a markdown node that contains example snippets.  Replacing content.'
      // );

      const literal = node as unist.Literal;
      const value = literal.value as string;

      literal.value = value.replace(
        /%%%([^%]*)%%%/g,
        (match: string, exampleId: string) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const [_, language, snippetType, snippetId] = exampleId.split(':');
          return SNIPPET_RESOLVER.resolveSnippet(
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
